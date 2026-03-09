import {describe, it, expect} from 'vitest';

import {mergeWithConcat} from './mergeWithConcat';

describe('mergeWithConcat', () => {
	it('should merge 2 objects with same keys by concatenating correspondent array values', () => {
		expect(
			mergeWithConcat({a: [1, 2, 3], b: [4, 5, 6]}, {a: [1, 2, 3], b: [4, 5, 6]})
		).toEqual({a: [1, 2, 3, 1, 2, 3], b: [4, 5, 6, 4, 5, 6]});
	});
	it('should merge 2 objects with different keys by concatenating correspondent array values', () => {
		expect(mergeWithConcat({a: [1, 2, 3]}, {b: [4, 5, 6]})).toEqual(
			{a: [1, 2, 3], b: [4, 5, 6]}
		);
	});
	it('should merge 1 empty object with another by concatenating array values', () => {
		expect(mergeWithConcat({}, {b: [4, 5, 6]})).toEqual({b: [4, 5, 6]});
	});
});
