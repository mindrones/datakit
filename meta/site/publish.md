# Publishing the site

The site is published to GitHub Pages by running:

```
pnpm --filter @datakit/site publish
```

This calls `gh workflow run publish-site.yml`, which sends a `workflow_dispatch` event to GitHub
via the **GitHub CLI**. The workflow file is at `.github/workflows/publish-site.yml`.

## Target URL

`https://mindrones.github.io/datakit/`

The SvelteKit `base` path is `/datakit` (set in `svelte.config.js`).

## Setup

### Setup`gh`

If `gh` isn't installed yet:

```
brew install gh
gh auth login
```

### GitHub settings

These two steps must be completed once before the first deploy succeeds.

#### 1. Grant Actions write permissions

Go to: `https://github.com/mindrones/datakit/settings/actions`

Under **Workflow permissions**, select **Read and write permissions** and click **Save**.

This allows the `peaceiris/actions-gh-pages` action to push to the `gh-pages` branch using
`${{ secrets.GITHUB_TOKEN }}`.

#### 2. Run the action once

`peaceiris/actions-gh-pages` creates the `gh-pages` branch automatically on first deploy.

#### 3. Enable GitHub Pages

Go to: `https://github.com/mindrones/datakit/settings/pages`

| Setting | Value |
|---|---|
| Source | **Deploy from a branch** |
| Branch | `gh-pages` |
| Folder | `/ (root)` |

Click **Save**.

## What the workflow does

1. **Checkout** — full repo clone
2. **Setup pnpm** — version read from `"packageManager"` in the root `package.json`
3. **Setup Node.js 22** — with `pnpm` cache enabled
4. **Install dependencies** — `pnpm install --frozen-lockfile`
5. **Build site** — `pnpm --filter @datakit/site build`
   - Runs `prebuild` first: `extract-docs` + `generate-llms` scripts
   - Output lands in `meta/site/build/`
6. **Deploy** — pushes `meta/site/build/` to the `gh-pages` branch via
   `peaceiris/actions-gh-pages@v4`, which also adds `.nojekyll` automatically

The workflow can also be re-triggered manually from the **GitHub Actions UI** (Actions → Publish site to GitHub Pages → Run workflow).

---

## pnpm version

The pnpm version used in CI is pinned via the `"packageManager"` field in the root
`package.json`. Update it there whenever the local pnpm version changes — the workflow picks
it up automatically with no further changes needed.

```json
"packageManager": "pnpm@10.30.3"
```
