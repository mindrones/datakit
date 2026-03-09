import {describe, it, expect} from 'vitest';

import {mergeWithAppendTo} from './mergeWithAppendTo';

describe('mergeWithAppendTo', () => {
	it('should merge 2 objects with same keys by appending values', () => {
		expect(
			mergeWithAppendTo({a: [1, 2, 3], b: [4, 5, 6]}, {a: 4, b: [7]})
		).toEqual({a: [1, 2, 3, 4], b: [4, 5, 6, [7]]});
	});
});
