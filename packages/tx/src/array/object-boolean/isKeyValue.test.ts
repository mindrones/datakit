import {describe, it, expect} from 'vitest';

import {isKeyValue} from './isKeyValue';

describe('isKeyValue', () => {
	it('should return a predicate expecting an object and returning true if the value at the provided key is the same as the provided value', () => {
		const isUSA = isKeyValue(['country_id', 'US']);

		expect(isUSA({country_id: 'GB', id: 123})).toEqual(false);
		expect(isUSA({country_id: 'US', id: 456})).toEqual(true);
	});
});
