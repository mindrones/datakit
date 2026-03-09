import areEquals from 'just-compare';

/**
 * Return a function that returns true if the input value is equal to the provided value.
 * This can be used to compare objects and arrays.
 *
 * @example
 * > isEqualToObj = isEqualTo({a: 1, b: [1,2]})
 * > isEqualToObj({a: 1, b: [1, 2]})
 * true
 * > isEqualToObj({a: 1, b: [1, 2, 3]})
 * false
 *
 * @since 0.1.0
 */
export const isEqualTo = <T>(value: T) => (other: unknown): boolean =>
	areEquals(value, other);
