import type {Fn} from '@datakit/types';

/**
 * Return a function that rounds the input number to the provided number of digits.
 * @see https://github.com/d3/d3-path/issues/10#issuecomment-262577521
 *
 * @example
 * > roundTo2 = roundTo(2)
 * > roundTo2(2.41285)
 * 2.41
 * > roundTo2(2.41785)
 * 2.42
 *
 * @since 0.1.0
 */
export const roundTo = (precision: number): Fn<number, number> =>
	x => Number(x.toFixed(precision));
