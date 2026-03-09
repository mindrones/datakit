import {describe, it, expect} from 'vitest';

import {arrayMaxBy} from './arrayMaxBy';

describe('arrayMaxBy', () => {
	const objArray = [
		{a: -1, b: -1},
		{a: 0, b: 0},
		{a: 1, b: 1},
		{a: 2, b: -2},
	];

	it('should return a function expecting an array of numbers and returning the max of values by the provided key', () => {
		const maxByA = arrayMaxBy('a');
		const maxByB = arrayMaxBy('b');

		expect(maxByA(objArray)).toEqual(2);
		expect(maxByB(objArray)).toEqual(1);
	});
	it('should return a function returning `-Infinity` if `key` is not found in the array objects', () => {
		const maxByMissingKey = arrayMaxBy('key');

		expect(maxByMissingKey(objArray)).toEqual(-Infinity);
	});
});
