import type {Fn} from '@datakit/types';

import {arraySumWith} from './arraySumWith';

/**
 * Return a function expecting an array and returning the average of
 * the numbers obtained by applying the provided `fn` to the array items.
 *
 * @example
 * > makeAverageOfA = makeAverageWith(_.getKey('a'));
 * > makeAverageOfA([{a: 1, b: 2}, {a: 10, b: 7}, {a: 7, b: 9}])
 * 6
 * > makeAverageOfA([])
 * 0
 *
 * @since 0.1.0
 */
export const makeAverageWith = <T>(fn: Fn<T, number>) =>
	(arr: T[]): number => {
		const length = arr.length;
		if (!length) return 0;
		return arraySumWith(fn)(arr) / length;
	};
