import {describe, it, expect} from 'vitest';

import {makeWithKeys} from './makeWithKeys';

describe('makeWithKeys', () => {
	it('should return a function expecting an array of values and returning an object with the provided keys', () => {
		const makeWithLatLng = makeWithKeys(['lng', 'lat']);

		expect(makeWithLatLng([1, 2])).toEqual({lng: 1, lat: 2});
		expect(makeWithLatLng([10, 20])).toEqual({lng: 10, lat: 20});
	});
});
