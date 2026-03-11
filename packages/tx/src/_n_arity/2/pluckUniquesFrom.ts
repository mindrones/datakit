import * as _ from 'lamb';

/**
 * Pluck unique values for the given key from the provided array of objects.
 *
 * @example
 * > pluckUniquesFrom([{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 2}], 'a')
 * [1, 2]
 */
export const pluckUniquesFrom = (arr: any[], key: string): any[] =>
	_.uniques(_.pluckFrom(arr, key));
