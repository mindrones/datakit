import {describe, it, expect} from 'vitest';

import {arrayMinBy} from './arrayMinBy';

describe('arrayMinBy', () => {
	const objArray = [
		{a: -1, b: -1},
		{a: 0, b: 0},
		{a: 1, b: 1},
		{a: 2, b: -2},
	];

	it('should return a function expecting an array of numbers and returning the min of values by the provided key', () => {
		const minByA = arrayMinBy('a');
		const minByB = arrayMinBy('b');

		expect(minByA(objArray)).toEqual(-1);
		expect(minByB(objArray)).toEqual(-2);
	});
	it('should return a function returning `Infinity` if `key` is not found in the array objects', () => {
		const minByMissingKey = arrayMinBy('key');

		expect(minByMissingKey(objArray)).toEqual(Infinity);
	});
});
