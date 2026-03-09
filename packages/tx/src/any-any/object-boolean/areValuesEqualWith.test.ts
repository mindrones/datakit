import {describe, it, expect} from 'vitest';

import {areValuesEqualWith, getValue} from '@datakit/tx';

describe('areValuesEqualWith', () => {
	it('should return a function expecting an object and returning `true` if its values once processed with the provided `accessor` function are all equal', () => {
		const areValuesEqual = areValuesEqualWith(getValue);

		expect(
			areValuesEqual({
				a: {key: 'a', value: 1},
				b: {key: 'b', value: 1},
			})
		).toEqual(true);
		expect(
			areValuesEqual({
				a: {key: 'a', value: 1},
				b: {key: 'b', value: 2},
			})
		).toEqual(false);
	});
	it('should return `false` for an empty object (fewer than 2 values to compare)', () => {
		expect(areValuesEqualWith(getValue)({})).toEqual(false);
	});
	it('should return `false` for a single-entry object (fewer than 2 values to compare)', () => {
		expect(areValuesEqualWith(getValue)({a: {key: 'a', value: 1}})).toEqual(false);
	});
});
