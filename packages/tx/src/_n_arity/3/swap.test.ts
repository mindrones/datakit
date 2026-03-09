import {describe, it, expect} from 'vitest';

import {swap} from './swap';

describe('swap', () => {
	const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	it('should swap intermediate indices', () => {
		expect(swap(arr1, 3, 7)).toEqual([0, 1, 2, 7, 4, 5, 6, 3, 8, 9]);
	});
	it('should swap first and second', () => {
		expect(swap(arr1, 0, 1)).toEqual([1, 0, 2, 3, 4, 5, 6, 7, 8, 9]);
	});
	it('should swap first and last', () => {
		expect(swap(arr1, 0, 9)).toEqual([9, 1, 2, 3, 4, 5, 6, 7, 8, 0]);
	});
});
