import {describe, it, expect} from 'vitest';

import {valuesMaxBy} from './valuesMaxBy';

describe('valuesMaxBy', () => {
	const objectOfObjects1 = {a: {k1: 1, k2: 20}, b: {k1: 3, k2: 2}};
	const objectOfObjects2 = {a: {k1: 9, k2: 12}, b: {k1: 7, k2: 2}};

	it('should return the max of the provided object values', () => {
		const maxByK1 = valuesMaxBy('k1');

		expect(maxByK1(objectOfObjects1)).toEqual(3);
		expect(maxByK1(objectOfObjects2)).toEqual(9);
	});
	it('should return -Infinity if the key is not found in the values objects', () => {
		const maxByKey = valuesMaxBy('key');

		expect(maxByKey(objectOfObjects1)).toEqual(-Infinity);
		expect(maxByKey(objectOfObjects2)).toEqual(-Infinity);
	});
});
