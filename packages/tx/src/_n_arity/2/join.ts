/**
 * Return a string by joining the provided array with the provided separator.
 *
 * @example
 * > join([0, 1, 2], '-')
 * '0-1-2'
 *
 * @since 0.1.0
 */
export const join = (array: unknown[], separator?: string): string =>
	array.join(separator);
