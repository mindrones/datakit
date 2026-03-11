import {describe, it, expect} from 'vitest';

import {countValues} from './countValues';

describe('countValues', () => {
	it('should count occurrences of each unique value', () => {
		expect(countValues({a: 'x', b: 'y', c: 'x', d: 'z', e: 'y'})).toEqual({
			x: 2,
			y: 2,
			z: 1,
		});
	});
	it('should return empty object for empty input', () => {
		expect(countValues({})).toEqual({});
	});
	it('should handle all unique values', () => {
		expect(countValues({a: 1, b: 2, c: 3})).toEqual({1: 1, 2: 1, 3: 1});
	});
});
