import * as _ from 'lamb';

/**
 * Return a function expecting an array and applying the provided transforms to its elements.
 * The result array length equals the length of the shorter of the two arrays.
 *
 * @example
 * > transformer = makeArrayTransformer([x => x * 20, x => x + 3])
 * > transformer([2, 2])
 * [40, 5]
 *
 * @since 0.1.0
 */
export const makeArrayTransformer = (fnArr: Array<(x: unknown) => unknown>) =>
	(arr: unknown[]): unknown[] => {
		const pairs = _.zip(fnArr, arr) as Array<[(x: unknown) => unknown, unknown]>;
		return pairs.map(([fn, arg]) => fn(arg));
	};
