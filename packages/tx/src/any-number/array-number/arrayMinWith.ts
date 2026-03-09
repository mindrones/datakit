import type {Fn} from '@datakit/types';

/**
 * Return a function expecting an array and returning the min of results
 * of applying the provided function on all of the array items.
 *
 * @example
 * > minWithAbsSin = arrayMinWith(_.pipe([Math.sin, Math.abs]))
 * > minWithAbsSin([-Math.PI/2, -Math.PI/4])
 * 0.7071067811865475
 * > minWithAbsSin([Math.PI/4, Math.PI/6])
 * 0.49999999999999994
 *
 * @since 0.1.0
 */
export const arrayMinWith = <T>(fn: Fn<T, number>) =>
	(arr: T[]): number => arr.reduce((min, item) => {
		const value = fn(item);
		return value < min ? value : min;
	}, Infinity);
