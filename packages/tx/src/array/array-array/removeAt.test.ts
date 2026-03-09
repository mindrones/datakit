import {describe, it, expect} from 'vitest';

import {removeAt} from './removeAt';

describe('removeAt', () => {
	const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const arr2 = [0, 1, 2];

	it('should remove values at the provided indices', () => {
		const removeIndices = removeAt([3, 4, 8]);
		expect(removeIndices(arr1)).toEqual([0, 1, 2, 5, 6, 7, 9]);
	});
	it('should remove the value at the first index', () => {
		const removeIndices = removeAt([0]);
		expect(removeIndices(arr1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});
	it('should remove the value at the last index', () => {
		const removeIndices = removeAt([9]);
		expect(removeIndices(arr1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
	});
	it('should ignore indices greater than the max index in the array', () => {
		const removeIndices = removeAt([1, 2, 3, 4]);
		expect(removeIndices(arr2)).toEqual([0]);
	});
	it('should not remove values if all indices are outside the array range', () => {
		const removeIndices = removeAt([3, 4]);
		expect(removeIndices(arr2)).toEqual(arr2);
	});
	it('should work correctly with unsorted indices', () => {
		const removeIndices = removeAt([8, 3, 4]);
		expect(removeIndices(arr1)).toEqual([0, 1, 2, 5, 6, 7, 9]);
	});
});
