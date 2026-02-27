// @svizzle/utils ships JS-only without type declarations.
// Wildcard ambient declaration suppresses TS7016 for all its submodule imports.
declare module '@svizzle/utils';
declare module '@svizzle/utils/src/modules/*.js';
