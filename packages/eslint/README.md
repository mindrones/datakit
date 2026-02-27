# `@datakit/eslint`

Shared ESLint configurations for `@datakit` packages, supporting both JavaScript and TypeScript.

## Exports

| Export | Description |
|---|---|
| `jsConfig` | Base JS rules (`@eslint/js` recommended) with browser + Node globals |
| `tsConfig` | TypeScript rules (`typescript-eslint` recommended), applied to `**/*.ts` |
| `jsdocConfig` | JSDoc rules; `@param`/`@returns` requirements disabled for `.ts` files (covered by types) |
| `styleConfig` | Indentation (tabs) and quote style (single) via `@stylistic/eslint-plugin-js` |

## Usage

```js
// eslint.config.js
import {jsConfig, jsdocConfig, styleConfig, tsConfig} from '@datakit/eslint';

export default [
    ...jsConfig,
    ...tsConfig,
    ...jsdocConfig,
    ...styleConfig,
];
```

Omit `tsConfig` in JS-only packages.
