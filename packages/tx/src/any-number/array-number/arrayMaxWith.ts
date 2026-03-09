import type {Fn} from '@datakit/types';

/**
 * Return a function expecting an array and returning the max of results
 * of applying the provided function on all of the array items.
 *
 * @example
 * > maxWithAbsSin = arrayMaxWith(_.pipe([Math.sin, Math.abs]))
 * > maxWithAbsSin([-Math.PI/2, -Math.PI/4])
 * 1
 * > maxWithAbsSin([Math.PI/4, Math.PI/6])
 * 0.7071067811865475
 *
 * @since 0.1.0
 */
export const arrayMaxWith = <T>(fn: Fn<T, number>) =>
	(arr: T[]): number => arr.reduce((max, item) => {
		const value = fn(item);
		return value > max ? value : max;
	}, -Infinity);
