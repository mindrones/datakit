import {describe, it, expect} from 'vitest';

import {isNotKeyValue} from './isNotKeyValue';

describe('isNotKeyValue', () => {
	it('should return a predicate expecting an object and returning true if the value at the provided key is not the same as the provided value', () => {
		const isNotUSA = isNotKeyValue(['country_id', 'US']);

		expect(isNotUSA({country_id: 'GB', id: 123})).toEqual(true);
		expect(isNotUSA({country_id: 'US', id: 456})).toEqual(false);
	});
});
