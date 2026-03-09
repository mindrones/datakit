import {describe, it, expect} from 'vitest';

import type {Obj} from '@datakit/types';

import {makeKeysGetter} from './makeKeysGetter';

describe('makeKeysGetter', () => {
	const getCoordinates = makeKeysGetter<number | string>(['lng', 'lat']);

	it('should return a function expecting an object and returning an array of values corresponding to the provided keys', () => {
		expect(
			getCoordinates({
				name: 'London',
				lat: 51.507222,
				lng: -0.1275,
				population: 8825000,
			})
		).toEqual([-0.1275, 51.507222]);
	});
	it('the returned array should contain undefineds for keys not contained in the provided object', () => {
		expect(
			getCoordinates({
				name: 'London',
				lng: -0.1275,
				population: 8825000,
			} as Obj<number | string>)
		).toEqual([-0.1275, undefined]);
		expect(
			getCoordinates({
				name: 'London',
				population: 8825000,
			} as Obj<number | string>)
		).toEqual([undefined, undefined]);
	});
});
