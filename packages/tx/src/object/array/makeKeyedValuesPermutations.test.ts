import {describe, it, expect} from 'vitest';

import {makeKeyedValuesPermutations} from './makeKeyedValuesPermutations';

describe('makeKeyedValuesPermutations', () => {
	it('should return an array of the permutations of the provided object values items, by key', () => {
		const obj = {a: [0, 1], b: [2, 3], c: [4, 5]};
		const expected = [
			{a: 0, b: 2, c: 4}, {a: 1, b: 2, c: 4},
			{a: 0, b: 3, c: 4}, {a: 1, b: 3, c: 4},
			{a: 0, b: 2, c: 5}, {a: 1, b: 2, c: 5},
			{a: 0, b: 3, c: 5}, {a: 1, b: 3, c: 5}
		];
		expect(makeKeyedValuesPermutations(obj)).toEqual(expected);
	});
	it('should filter out non valid values before creating permutations', () => {
		const obj = {a: [0, 1], b: [], c: [4, 5], d: 1, e: 'string'};
		const expected = [
			{a: 0, c: 4}, {a: 1, c: 4},
			{a: 0, c: 5}, {a: 1, c: 5}
		];
		expect(makeKeyedValuesPermutations(obj)).toEqual(expected);
	});
	it('should return an empty array if none of the values are valid', () => {
		const obj = {a: [], b: [], c: {k: 1}, d: 1, e: 'string'};
		expect(makeKeyedValuesPermutations(obj)).toEqual([]);
	});
});
