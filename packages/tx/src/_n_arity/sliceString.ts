/**
 * Return the portion of the provided string between the provided indices
 * (first included, second excluded). Indices can be negative.
 *
 * @example
 * > sliceString('0123456789', 3)
 * '3456789'
 * > sliceString('0123456789', 3, 5)
 * '34'
 * > sliceString('0123456789', 3, -1)
 * '345678'
 *
 * @since 0.1.0
 */
export const sliceString =
	(str: string, beginIndex: number, endIndex?: number): string =>
		str.slice(beginIndex, endIndex);
