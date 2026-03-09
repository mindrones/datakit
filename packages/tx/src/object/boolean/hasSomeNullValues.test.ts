import {describe, it, expect} from 'vitest';

import {hasSomeNullValues} from './hasSomeNullValues';

describe('hasSomeNullValues', () => {
	it('should return false if the provided object has no properties being `null`', () => {
		expect(hasSomeNullValues({a: 1})).toEqual(false);
		expect(hasSomeNullValues({a: 1, b: undefined})).toEqual(false);
	});
	it('should return true if some of the provided object properties are `null`', () => {
		expect(hasSomeNullValues({a: 1, b: undefined, c: null})).toEqual(true);
	});
});
