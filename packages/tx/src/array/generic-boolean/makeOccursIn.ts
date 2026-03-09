import areEquals from 'just-compare';
import * as _ from 'lamb';

/**
 * Return a function returning true if the passed value is found in the provided array.
 * This function is ideal to check the presence of arrays or objects.
 * To check primitive values use makeIsIncluded instead.
 *
 * @example
 * > isOneOfThoseArrays = makeOccursIn([
 *   [1, 2, 3], [1, 2, 3, 4], [5, 6, 7, 6, 5]
 * ])
 * > isOneOfThoseArrays([1, 2, 3])
 * true
 * > isOneOfThoseArrays([1, 2])
 * false
 *
 * @since 0.1.0
 */
export const makeOccursIn = <T>(array: T[]) =>
	(input: T): boolean =>
		_.someIn(array, (elem: T) => areEquals(elem, input));
