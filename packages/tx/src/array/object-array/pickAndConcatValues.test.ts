import {describe, it, expect} from 'vitest';

import {pickAndConcatValues} from './pickAndConcatValues';

describe('pickAndConcatValues', () => {
	it('should return a function expecting an object and concatenating values in the provided list of keys', () => {
		const getProducts = pickAndConcatValues(['food', 'beverage']);
		const actual = getProducts({
			food: ['bread', 'cheese', 'ham'],
			beverage: ['wine', 'water'],
		});
		expect(actual).toEqual(['bread', 'cheese', 'ham', 'wine', 'water']);
	});
	it('should return an empty array for a missing key (`?? []` fallback)', () => {
		const getProducts = pickAndConcatValues(['food', 'missing']);
		expect(getProducts({food: ['bread', 'cheese']})).toEqual(['bread', 'cheese']);
	});
});
