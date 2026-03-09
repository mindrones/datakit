import {describe, it, expect} from 'vitest';

import {areEqual} from './areEqual';

describe('areEqual', () => {
	it('should return `true` if items in the provided array are equal', () => {
		expect(areEqual([false, false, false])).toEqual(true);
		expect(areEqual([1, 1, 1])).toEqual(true);
		expect(areEqual([{a: 1}, {a: 1}, {a: 1}])).toEqual(true);
		expect(areEqual([[1, 2], [1, 2], [1, 2]])).toEqual(true);
		expect(areEqual([
			{a: [1, {a: [1, 2]}]},
			{a: [1, {a: [1, 2]}]},
			{a: [1, {a: [1, 2]}]}
		])).toEqual(true);
	});
	it('should return `false` if items in the provided array are different', () => {
		expect(areEqual([true, false, true])).toEqual(false);
		expect(areEqual([[0], {a: 1}, 7])).toEqual(false);
	});
	it('should return `false` if the provided array has less than 2 items', () => {
		expect(areEqual([])).toEqual(false);
		expect(areEqual([1])).toEqual(false);
	});
});
