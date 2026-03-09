import type {Fn} from '@datakit/types';

/**
 * Return a function that computes the polynomial of the input number using the provided coefficients.
 * The exponent corresponds to the coefficient's index.
 *
 * @example
 * > // x => 2 x + 4 x^3
 * > poly = makePolynomial([0, 2, 0, 4])
 * > poly(2)
 * 36
 * > poly(5)
 * 510
 *
 * @since 0.1.0
 */
export const makePolynomial =
	(coefficients: number[]): Fn<number, number> => {
		const terms = coefficients.reduce<Array<Fn<number, number>>>(
			(acc, coefficient, exponent) => {
				if (coefficient) {
					acc.push((x: number) => coefficient * Math.pow(x, exponent));
				}
				return acc;
			},
			[]
		);
		return (x: number) => terms.reduce((sum, term) => sum + term(x), 0);
	};
