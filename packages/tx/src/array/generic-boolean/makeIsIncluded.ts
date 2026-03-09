/**
 * Return a function returning true if the passed (primitive) value is found
 * in the provided array.
 * To check non-primitive values use makeOccursIn instead.
 *
 * @example
 * > isIncluded = makeIsIncluded([1, 2, 3])
 * > isIncluded(1)
 * true
 * > isIncluded(4)
 * false
 *
 * @since 0.1.0
 */
export const makeIsIncluded = <T>(array: T[]) =>
	(value: T): boolean => array.includes(value);
