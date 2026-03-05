# @datakit/types/lamb

Pragmatic type declarations for `lamb@0.61.x`, to be used instead of the upstream `lamb-types` package, differences outlined below.

Usage:
- import `@datakit/types`
- `tsconfig.json`: use `compilerOptions.types = ['@datakit/types/lamb', ...]`

## array

- `flatMap`/`flatMapWith` iteratee returns `T[]` → result `T[]` (was `T[][]`).
- `forEach` callback may return anything.
- `groupBy`/`indexBy`/`group`/`index` — `T` constraint dropped from
- `reduce`/`reduceRight` and their `With` variants accept `initialValue?: any` so R is inferred from the callback, not from a `[]` literal.
- `sorter`/`sorterDesc`/`sortWith`/`sort`/`sortedInsert` — readers are `(value: any) => any`.

## function

- `pipe` is a simple flat overload — removes `PipeArgs` back-propagation that widens `collect` element types to `unknown`.

## logic

- `allOf`/`anyOf` accept and return `(value: any) => boolean` — typed
  predicates (`Predicate<HasLength>` etc.) now compose without casts.
  `extends Record<string, any>`.

## math

- `range` — `step` is optional.

## object

- `getKey` returns `any` instead of a deferred conditional — eliminates
  `SorterReader<unknown>` and `collect` incompatibility errors everywhere.
- `make`, `has`, `merge` added (missing from `lamb-types`).
- `mapValues`/`mapValuesWith` — callback typed as `(value: any, ...) => R`.

## types

- `bigint` overloads removed from all math functions — YAGNI; add back if needed.
- `SorterReader` has no generic — `(value: any) => any`.
