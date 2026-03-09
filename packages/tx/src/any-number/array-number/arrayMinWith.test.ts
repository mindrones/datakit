import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {arrayMinWith} from './arrayMinWith';

describe('arrayMinWith', () => {
	it('should return a function expecting an array and returning the min of results of applying the provided function on all of the array items', () => {
		const minWithAbsSin = arrayMinWith(_.pipe([Math.sin, Math.abs]));
		expect(minWithAbsSin([-Math.PI/2, -Math.PI/4])).toEqual(0.7071067811865475);
		expect(minWithAbsSin([Math.PI/4, Math.PI/6])).toEqual(0.49999999999999994);
	});
	it('should return Infinity for an empty array (reduce seed)', () => {
		expect(arrayMinWith((x: number) => x)([])).toEqual(Infinity);
	});
});
