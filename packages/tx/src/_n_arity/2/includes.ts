/**
 * Return true if the provided value is included in the provided array.
 *
 * @example
 * > includes([0, 1, 2], 2)
 * true
 * > includes([0, 1, 2], 3)
 * false
 *
 * @since 0.1.0
 */
export const includes = <T>(array: T[], value: T): boolean =>
	array.includes(value);
