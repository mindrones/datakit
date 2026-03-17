import type {Fn} from '@datakit/types';

/**
 * Return the factorial of a number.
 *
 * @example
 * > factorial(0)
 * 1
 * > factorial(5)
 * 120
 *
 * @since 0.3.0
 */
export const factorial: Fn<number, number> = n => {
	if (n < 0) {
		throw new Error('Factorial is not defined for negative numbers');
	}
	if (n === 0 || n === 1) {
		return 1;
	}
	let result = 1;
	for (let i = 2; i <= n; i++) {
		result *= i;
	}
	return result;
};
