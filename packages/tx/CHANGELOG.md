# @datakit/tx

## v0.3.1

- updated `@data/types`, used `Maybe`

## v0.3.0

Added:

- sorters:
	- `sorterKeyDesc`
	- `sorterLabelDesc`
	- `sorterValueDesc`

- sort functions:
	- `sortDesc`
	- `sortKeyAsc`
	- `sortKeyDesc`
	- `sortValueAsc`
	- `sortValueAscKeyDesc`
	- `sortValueDesc`
	- `sortValueDescKeyAsc`
	- `sortValueDescKeyDesc`
	- `sortValueDescLabelAsc`
	- `sortValueDescLabelDesc`
	- `sortValueDescLabelLowercaseAsc`
	- `sortValueDescLabelLowercaseDesc`

- accessors:
	- `getLabel`
	- `getLabelLowercase`

- rest:
	- `chunkArray`
	- `pluckUniquesFrom`
	- `permutationsCount`
	- `sumValue`
	- `makeKeyedEmptyArray`
	- `makeKeyedNull`
	- `factorial`
	- `plural`
	- `objectToValueDescKeyAsc`
	- `areAllValuesTruthy`
	- `areSomeValuesTruthy`
	- `countValues`
	- `pickIfKeyWith`
	- `skipIfKeyWith`
	- `pluckUniques`
	- `countByKey`

## 0.2.0

### Ported `@svizzle/utils` to TypeScript here.

Changed:
- `arraySumWith`, `makeAverageWith`
	- accessor type tightened from `(item: T) => unknown` to `(item: T) => number`, aligning with the directory convention (`any-number/`)
	- the original JS implementation of `arraySumWith` silently skipped non-number values; the ported version enforces that the accessor must return a number
- `removeAt`: the original JS implementation assumed indices were sorted in ascending order and would silently skip removals for unsorted inputs; the ported version uses `Array.prototype.filter` with `includes`, which handles unsorted indices correctly

Fixed:
- `isNotNaN`:
	— was using the legacy global isNaN(), which coerces its argument to a number first.
	`isNaN('string')` and `isNaN(undefined)` both returned `true`
	(because Number('string') === NaN and Number(undefined) === NaN),
	so the "false" assertions in the test appeared to be correct but were only passing by accident.
	- switched to `Number.isNaN()`, which has no coercion and returns `true` only for the actual `NaN` value
- `any-any/any-boolean/isNotNaNWith.test.ts`:
	— moved `string` and `undefined` to the true group (they are not `NaN`),
	- leaving only `NaN` itself in the false group

Dropped: `reduceTo`, `reduceFromEmptyArray`, `reduceFromEmptyObject`
Tests: Some tests were enhanced with additional cases.

### Ported `lamb`'s `pipe`

This version enable annotating input and output types explicitly going forward.


## v0.1.2

- Fix local exports inadvertently broken in `v0.1.1`

## v0.1.1

- Change how we re-exports `@svizzle/utils` to enable its autocompletion

## v0.1.0

- Re-exports all functions from `@svizzle/utils@0.21.0`
- Re-exports `compare` from `just-compare@2.3.0` as `areEquals`
- add: `getRandomItemOf`, `getRandomIndexOf`, `joinWithNewline`
