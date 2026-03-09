import {describe, it, expect} from 'vitest';

import {raiseWith} from './raiseWith';

describe('raiseWith', () => {
	it('should return a function expecting an array and returning a new array with all items satisfying the provided predicate in the tail, in the same relative order they were in the input array', () => {
		const raiseOdds = raiseWith((x: number) => x % 2 === 1);
		const actual = raiseOdds([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
		const expected = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
		expect(actual).toEqual(expected);
	});
});
