import {describe, it, expect} from 'vitest';

import {makeWithValues} from './makeWithValues';

describe('makeWithValues', () => {
	it('should return a function expecting an array of keys and returning an object with the provided values', () => {
		const makeWithTheseValues = makeWithValues([1, 2]);

		expect(makeWithTheseValues(['lng', 'lat'])).toEqual({lng: 1, lat: 2});
		expect(makeWithTheseValues(['foo', 'bar'])).toEqual({foo: 1, bar: 2});
	});
});
