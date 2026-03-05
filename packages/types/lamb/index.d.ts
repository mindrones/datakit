// Order matters: types.d.ts must come first — it defines the utility types
// (AnyFunction, SorterReader, UnaryFunction, etc.) that all other modules reference
// via `declare module 'lamb'` merging.

/// <reference path="./types.d.ts" />
/// <reference path="./array.d.ts" />
/// <reference path="./function.d.ts" />
/// <reference path="./logic.d.ts" />
/// <reference path="./math.d.ts" />
/// <reference path="./object.d.ts" />
/// <reference path="./string.d.ts" />
/// <reference path="./type.d.ts" />
