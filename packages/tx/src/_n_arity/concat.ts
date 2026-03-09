/**
 * Return an array by concatenating the provided arrays.
 *
 * @example
 * > concat([0, 1, 2], [3, 4], [5, 6])
 * [0, 1, 2, 3, 4, 5, 6]
 *
 * @since 0.1.0
 */
export const concat = <T>(first: T[], ...rest: T[][]): T[] =>
	first.concat(...rest);
