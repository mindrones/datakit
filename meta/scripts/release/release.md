# Release script — `meta/scripts/release/`

Run with: `pnpm release`

---

## Usage

```
pnpm release                                         interactive release
pnpm release --dry                                   dry run — all checks, nothing written
pnpm release --packages <list> --bump <type> --yes   non-interactive release
```

| Flag | Value | Description |
|---|---|---|
| `--dry` | boolean | Simulate the full run — no writes, no git, no npm |
| `--packages <list>` | comma-separated `tx`, `types`, `eslint` | Packages to release; skips the multiselect prompt |
| `--bump patch\|minor` | `patch` \| `minor` | Bump type for all selected packages |
| `--yes` | boolean | Auto-confirm at Step 4; requires `--packages` and `--bump` |
| `--no-deploy` | boolean | Skip the optional site deploy step (Step 8) |
| `-h`, `--help` | boolean | Print usage and exit |

---

## Flow

### Step 0 — Pre-flight checks (silent, abort before any prompts)

1. `npm whoami` — if not logged in, exit with a clear error
2. `git status --porcelain` — if working tree is dirty, exit with a clear error
3. Must be on `dev` branch — if not, exit with a clear error
4. Tag pre-run detection — see error recovery below

---

### Step 1 — Quality gates + annotation check

**Phase A — quality gates** (spinners, abort on failure — nothing written to disk yet)

```
◇ running tests …          ✔ passed
◇ running typecheck …      ✔ passed
◇ running lint …           ✔ passed
◇ pnpm publish --dry-run … ✔ OK
```

On failure: print the full stderr output, exit.
These run **before version selection** — if tests are broken there's nothing to decide yet.

**Phase B — annotation check** (informational, never aborts)

Scans all publishable packages (`tx`, `types`) for exported symbols that have a JSDoc block
but no `@since` tag.

If any are found, print the list and pause:

```
⚠ Exports missing @since:
  packages/tx/src/array/array/chunkArray.ts         chunkArray
  packages/tx/src/array/array/pluckUniquesFrom.ts   pluckUniquesFrom
  packages/tx/src/object/object/countByKey.ts       countByKey
  … (12 total)

◆ Add @since to the above, then press Enter to rescan — or choose skip.
  ● rescan  — I've added @since, check again
  ○ skip    — proceed without @since on these exports
```

Adding `@since` is doc-only and doesn't affect tests or types — no quality gates re-run needed.

---

### Step 2 — Select packages

```
◆ Which packages to release? (space to toggle)
  ◻ @datakit/tx        (currently 0.2.0,  has ## next in CHANGELOG)
  ◻ @datakit/types     (currently 0.1.0,  has ## next in CHANGELOG)
  ◻ @datakit/eslint    (currently 0.1.0,  no ## next in CHANGELOG)
```

If nothing selected → cancel + exit.

---

### Step 3 — Select bump type per selected package

```
◆ @datakit/tx  (current: 0.2.0) — bump type?
  ● patch   → 0.2.1
  ○ minor   → 0.3.0
  ○ major   → 1.0.0
  ○ custom  → enter manually
  ○ ← back  → return to package selection
```

`custom` triggers a follow-up `text` prompt validated with `semver.valid()`.
`← back` returns to Step 2, discarding all bump choices made so far.

> Back navigation wraps Steps 2–4 in a `while` loop driven by a `step` variable.

---

### Step 4 — Preview summary + action

```
┌──────────────────────────────────────────────────────────────────┐
│  package          old      new                                   │
│  @datakit/tx      0.2.0 → 0.2.1                                  │
│  @datakit/types   0.1.0 → 0.1.1                                  │
│                                                                  │
│  tag:     20260314                                               │
│  commit:  chore: release @datakit/tx@0.2.1 @datakit/types@0.1.1  │
│  branch:  dev  (releases always happen on the default branch)    │
└──────────────────────────────────────────────────────────────────┘

◆ Proceed?
  ● confirm — write files, commit, tag, push, publish
  ○ back    — go back to bump selection (Step 3)
  ○ exit    — abort with no disk changes
```

---

### Step 5 — Write changes to disk

For each selected package:

1. **Bump version** in `packages/{name}/package.json`
2. **Rename `## next`** in `packages/{name}/CHANGELOG.md` → `## v{newVersion} — {YYYY-MM-DD}`
   (skipped silently if `## next` is absent)
3. **Prepend to root `RELEASE.md`**:
   ```
   ## YYYYMMDD
   - @datakit/tx@0.2.1
   - @datakit/types@0.1.1
   ```

---

### Step 6 — Commit, tag, push

```
◇ committing …   ✔
◇ tagging …      ✔  20260314
◇ pushing …      ✔
```

**Tag format — `YYYYMMDD`**

- Tag name: `20260314` — used as the GitHub Release title.
- Tag annotation lists each released package + version — displayed as the GitHub Release body.
- Same-day re-release auto-increments: `20260314-2`, `20260314-3`, etc.
- Uses `git tag -a` (annotated) so `git push --follow-tags` picks it up.

---

### Step 7 — Publish to npm

```
◇ publishing to npm …   ✔
```

`pnpm publish --filter @datakit/tx --filter @datakit/types` — only selected packages,
never all packages.

---

### Step 8 — Deploy site (optional)

```
◆ Deploy the site now?
  ● yes — build and deploy meta/site
  ○ no  — skip (you can run pnpm --filter @datakit/site deploy later)
```

The `extract-docs.ts` prebuild runs `git rev-parse HEAD` at build time. Since HEAD is the
release commit (also tagged), all source links in the deployed site point to that stable
tagged commit SHA.

---

### Step 9 — Done

```
✔ Released!
  @datakit/tx@0.2.1    → https://www.npmjs.com/package/@datakit/tx
  @datakit/types@0.1.1 → https://www.npmjs.com/package/@datakit/types
```

---

## Error recovery

| Phase | Risk | State left | Recovery |
|---|---|---|---|
| **Step 1A** — quality gates fail | Tests/lint broken | clean (nothing written) | fix the issue, re-run |
| **Step 1B** — user chooses `skip` | Some exports have no `@since` | clean | acceptable; annotate in a follow-up commit |
| **Step 4** — user chooses `exit` | Changed mind | clean | just re-run |
| **Step 4** — user chooses `back` | Wants different versions | clean | loop back to Step 3, no risk |
| **Step 5** — partial disk write fails | Some files updated, some not | dirty working tree | `git checkout -- .` to reset, fix, re-run |
| **Step 6a** — commit fails | e.g. git hook rejects | dirty working tree (staged) | `git reset HEAD` to unstage, `git checkout -- .` to discard, fix, re-run |
| **Step 6b** — tag exists locally but not on remote | previous run failed at push | clean working tree | `git push origin HEAD --follow-tags` to retry, or `git tag -d <tag>` to discard and start fresh |
| **Step 6c** — push fails (remote ahead) | commit + tag exist locally only | clean working tree | `git pull --rebase origin dev` then `git push origin HEAD --follow-tags` |
| **Step 6d** — push succeeds but Step 7 fails | commit + tag on remote, npm not published | clean | `pnpm publish --filter @datakit/tx` etc. manually |
| **Step 8** — deploy fails | npm published, site not deployed | clean | `pnpm --filter @datakit/site deploy` manually |

---

## Agent usage

Agents can drive the full release non-interactively using CLI flags (see [## Usage](#usage) above).

### Workflow

**Step A — preview (always run this first):**

```
pnpm release --dry
```

Read the output carefully. It shows: quality gate results, missing `@since` tags, which
packages will be released, the version bump, the git tag, and the commit message.
Present this output to the user and wait for approval before proceeding.

**Step B — user approves — run the real release:**

```
pnpm release --packages <list> --bump <type> --yes --no-deploy
```

Example:
```
pnpm release --packages tx,types --bump minor --yes --no-deploy
```

### Bump policy

**Only `patch` or `minor` are valid for non-interactive releases. Never choose `major`.**

During the pre-1.0 development phase, breaking changes are intentional and expected.
Releasing them as `major` would make version numbers grow too fast and cause unnecessary
noise for consumers. All breaking changes should be released as `minor`.

To decide the bump type, read the `## next` section in each package's `CHANGELOG.md`:

- New exported functions, types, or features → **`minor`**
- Bug fixes, internal refactors, or dependency updates only → **`patch`**

If a package's CHANGELOG has no `## next` section, it has no unreleased changes and
should not be included in the release.

### `@since` tags

Every exported symbol that has a JSDoc block must also have a `@since` tag with the
version being released (e.g. `@since 0.4.0`).

The dry run shows all missing tags. If any are found:

1. For each entry, open the source file and add `/** @since <new-version> */` (or append
   `@since <new-version>` to the existing JSDoc block).
2. Re-run `pnpm release --dry` to confirm nothing is missing.
3. Then proceed with `--yes`.

If `--yes` is passed and missing `@since` tags are still present, the script exits with a
non-zero code and lists the offending symbols — fix them and re-run.
