import {describe, it, expect} from 'vitest';

import {arraySum} from './arraySum';

describe('arraySum', () => {
	it('should return the sum of the numbers in the provided array', () => {
		expect(arraySum([1, -2, 3, -4, 5])).toEqual(3);
	});
	it('should return 0 if an empty array is provided', () => {
		expect(arraySum([])).toEqual(0);
	});

	/*
	 * Regression: _.reduceWith from lamb captures the initial accumulator value
	 * at the time the partially applied function is created.
	 * If that value were mutated between calls (or carried over), subsequent
	 * invocations would return wrong results.
	 * These tests ensure each call starts fresh from 0.
	 */
	describe('stateless repeated calls (regression: _.reduceWith accumulator reset)', () => {
		it('should return the same result when called twice with the same array', () => {
			expect(arraySum([1, 2, 3])).toEqual(6);
			expect(arraySum([1, 2, 3])).toEqual(6);
		});
		it('should not accumulate results across successive calls', () => {
			expect(arraySum([1, 2, 3])).toEqual(6);
			// if the accumulator leaked, this would be 6 + 4 + 5 + 6 = 21 instead of 15
			expect(arraySum([4, 5, 6])).toEqual(15);
		});
		it('second call result should not include the first call result', () => {
			const first = arraySum([10, 20]);
			const second = arraySum([1, 2]);
			expect(first).toEqual(30);
			// if state leaked, second would be 30 + 1 + 2 = 33 instead of 3
			expect(second).toEqual(3);
		});
		it('should reset to 0 after a non-empty call', () => {
			arraySum([100, 200, 300]);
			// leaked accumulator would make this 600 instead of 0
			expect(arraySum([])).toEqual(0);
		});
	});
});
