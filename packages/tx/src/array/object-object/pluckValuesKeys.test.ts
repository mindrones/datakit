import {describe, it, expect} from 'vitest';

import {pluckValuesKeys} from './pluckValuesKeys';

describe('pluckValuesKeys', () => {
	it('should return a function plucking the provided keys from the expected object values', () => {
		const select = pluckValuesKeys(['a', 'k']);
		expect(select({
			foo: {a: 1, b: 2, c: 3, k: 4},
			bar: {a: 5, b: 6, c: 7, k: 8},
		})).toEqual({
			foo: {a: 1, k: 4},
			bar: {a: 5, k: 8},
		});
	});
	it('should return a function plucking the provided keys from the expected object values – missing keys', () => {
		const select = pluckValuesKeys(['a', 'k']);
		expect(select({
			foo: {a: 1, b: 2, c: 3, k: 4},
			bar: {a: 5, b: 8},
		})).toEqual({
			foo: {a: 1, k: 4},
			bar: {a: 5},
		});
	});
});
