import type {Fn} from '@datakit/types';

/**
 * Return a function expecting an array and summing the numbers obtained
 * from applying the provided `fn` to the array items.
 *
 * @example
 * > sumValues = arraySumWith(_.getKey('a'))
 * > sumValues([{a: 1}, {a: 2}, {a: 3}])
 * 6
 * > sumValues([])
 * 0
 *
 * @since 0.1.0
 */
export const arraySumWith = <T>(fn: Fn<T, number>) =>
	(arr: T[]): number =>
		arr.reduce((acc, item) => acc + fn(item), 0);
