import {describe, it, expect} from 'vitest';
import * as _ from 'lamb';

import {valuesMinWith} from './valuesMinWith';

describe('valuesMinWith', () => {
	it('should return a function expecting an object of objects and returning the min of values by the provided key', () => {
		const minWithAbsSin = valuesMinWith(_.pipe([Math.sin, Math.abs]));
		const angles1 = {a: -Math.PI / 2, b: -Math.PI / 4};
		const angles2 = {a: -Math.PI / 4, b: -Math.PI / 6};

		expect(minWithAbsSin(angles1)).toEqual(0.7071067811865475);
		expect(minWithAbsSin(angles2)).toEqual(0.49999999999999994);
	});
	it('should return Infinity for an empty object (reduce seed)', () => {
		expect(valuesMinWith((x: number) => x)({})).toEqual(Infinity);
	});
});
