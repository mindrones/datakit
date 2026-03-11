# shadcn-svelte components

These components were scaffolded using the [shadcn-svelte](https://shadcn-svelte.com) CLI and are stored here as owned source files — they are **not** a runtime dependency.

## How they were added

```sh
npx shadcn-svelte@latest add <component>
```

## Runtime dependency: bits-ui

The copied component files import directly from [bits-ui](https://bits-ui.com), which is a real runtime dependency. It provides the headless accessibility primitives (keyboard navigation, ARIA, focus management) that power these components under the hood.

## Convention

Do **not** modify files in this directory. If custom behaviour or styling is needed, wrap these components in `$lib/components/` instead.

## Upgrades

Keep upgrades clean:
- run `npx shadcn-svelte@latest add <component>` again
- review the git diff
- accept upstream changes without conflict.
