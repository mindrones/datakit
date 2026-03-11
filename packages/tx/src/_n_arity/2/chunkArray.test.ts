import {describe, it, expect} from 'vitest';

import {chunkArray} from './chunkArray';

describe('chunkArray', () => {
	it('should split an array into chunks of the given size', () => {
		expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
	});
	it('should handle a chunk size equal to the array length', () => {
		expect(chunkArray([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
	});
	it('should return an array with one chunk for chunk size larger than the array', () => {
		expect(chunkArray([1, 2], 10)).toEqual([[1, 2]]);
	});
	it('should return an empty array for an empty input', () => {
		expect(chunkArray([], 2)).toEqual([]);
	});
});
