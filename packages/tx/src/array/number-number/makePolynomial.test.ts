import {describe, it, expect} from 'vitest';

import {makePolynomial} from './makePolynomial';

describe('makePolynomial', () => {
	it('should return a function that computes the polynomial of the input number using the provided coefficients', () => {
		const poly = makePolynomial([0, 2, 0, 4]);

		expect(poly(2)).toEqual(36);
		expect(poly(5)).toEqual(510);
	});
});
