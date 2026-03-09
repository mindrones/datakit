import {describe, it, expect} from 'vitest';

import {valuesMinBy} from './valuesMinBy';

describe('valuesMinBy', () => {
	const objectOfObjects1 = {a: {k1: 1, k2: 20}, b: {k1: 3, k2: 2}};
	const objectOfObjects2 = {a: {k1: 9, k2: 12}, b: {k1: 7, k2: 2}};

	it('should return the min of the provided object values', () => {
		const minByK1 = valuesMinBy('k1');

		expect(minByK1(objectOfObjects1)).toEqual(1);
		expect(minByK1(objectOfObjects2)).toEqual(7);
	});
	it('should return Infinity if the key is not found in the values objects', () => {
		const minByKey = valuesMinBy('key');

		expect(minByKey(objectOfObjects1)).toEqual(Infinity);
		expect(minByKey(objectOfObjects2)).toEqual(Infinity);
	});
});
