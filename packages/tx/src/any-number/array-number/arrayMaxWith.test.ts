import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {arrayMaxWith} from './arrayMaxWith';

describe('arrayMaxWith', () => {
	it('should return a function expecting an array and returning the max of results of applying the provided function on all of the array items', () => {
		const maxWithAbsSin = arrayMaxWith(_.pipe([Math.sin, Math.abs]));
		expect(maxWithAbsSin([-Math.PI/2, -Math.PI/4])).toEqual(1);
		expect(maxWithAbsSin([Math.PI/4, Math.PI/6])).toEqual(0.7071067811865475);
	});
	it('should return -Infinity for an empty array (reduce seed)', () => {
		expect(arrayMaxWith((x: number) => x)([])).toEqual(-Infinity);
	});
});
