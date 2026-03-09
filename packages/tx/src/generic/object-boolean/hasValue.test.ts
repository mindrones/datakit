import {describe, it, expect} from 'vitest';

import {hasValue} from './hasValue';

describe('hasValue', () => {
	it('should return a function that returns true if at least one of the input object properties has the provided value – number', () => {
		const hasTwo = hasValue(2);

		expect(hasTwo({a: 1, b: 2})).toEqual(true);
		expect(hasTwo({a: 1, b: 3})).toEqual(false);
	});
	it('should return a function that returns true if at least one of the input object properties has the provided value – array', () => {
		const hasEmptyList = hasValue([]);

		expect(hasEmptyList({a: 1, b: []})).toEqual(true);
		expect(hasEmptyList({a: 1, b: 3})).toEqual(false);
	});
});
