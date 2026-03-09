import {describe, it, expect} from 'vitest';

import {getFirstAndLast} from './getFirstAndLast';

describe('getFirstAndLast', () => {
	it('should return an array containing the first and the last element', () => {
		expect(getFirstAndLast([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([0, 9]);
	});
	it('should return [x, x] if passed a single value array', () => {
		expect(getFirstAndLast([0])).toEqual([0, 0]);
	});
	it('should return [undefined, undefined] if passed an empty array', () => {
		expect(getFirstAndLast([])).toEqual([undefined, undefined]);
	});
});
