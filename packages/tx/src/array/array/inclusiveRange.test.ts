import {describe, it, expect} from 'vitest';

import {inclusiveRange} from './inclusiveRange';

describe('inclusiveRange', () => {
	it('should return the range within the provided limits, both limits being included', () => {
		expect(inclusiveRange([2, 5])).toEqual([2, 3, 4, 5]);
		expect(inclusiveRange([2, 12])).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(inclusiveRange([2, 12, 2])).toEqual([2, 4, 6, 8, 10, 12]);
		expect(inclusiveRange([2, 11, 2])).toEqual([2, 4, 6, 8, 10]);
	});
	it('should return an array if limits are equal', () => {
		expect(inclusiveRange([1, 1])).toEqual([1]);
	});
	it('should return an array if limits are equal – and zeroes', () => {
		expect(inclusiveRange([0, 0])).toEqual([0]);
	});
	it('should return an empty array if limits are an empty array', () => {
		expect(inclusiveRange([])).toEqual([]);
	});
});
