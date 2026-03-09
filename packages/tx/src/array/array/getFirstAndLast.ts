import * as _ from 'lamb';

/**
 * Return an array containing the first and the last element of the provided array.
 *
 * @example
 * > getFirstAndLast([0, 1, 2, 3, 4])
 * [0, 4]
 * > getFirstAndLast([0])
 * [0, 0]
 * > getFirstAndLast([])
 * [undefined, undefined]
 *
 * @since 0.1.0
 */
export const getFirstAndLast =
	<T>(array: T[]): [T | undefined, T | undefined] => [
		_.head(array) as T | undefined,
		_.last(array) as T | undefined
	];
