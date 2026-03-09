import {describe, it, expect} from 'vitest';
import * as _ from 'lamb';

import {valuesMaxWith} from './valuesMaxWith';

describe('valuesMaxWith', () => {
	it('should return a function expecting an object of objects and returning the max of values by the provided key', () => {
		const maxWithAbsSin = valuesMaxWith(_.pipe([Math.sin, Math.abs]));
		const angles1 = {a: -Math.PI / 2, b: -Math.PI / 4};
		const angles2 = {a: -Math.PI / 4, b: -Math.PI / 6};

		expect(maxWithAbsSin(angles1)).toEqual(1);
		expect(maxWithAbsSin(angles2)).toEqual(0.7071067811865475);
	});
	it('should return -Infinity for an empty object (reduce seed)', () => {
		expect(valuesMaxWith((x: number) => x)({})).toEqual(-Infinity);
	});
});
