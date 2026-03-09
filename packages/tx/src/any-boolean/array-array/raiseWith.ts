import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

import {concat} from '../../_n_arity/concat';

/**
 * Return a function expecting an array and returning a new array with all items
 * satisfying the provided predicate in the tail, in the same relative order
 * they were in the input array.
 *
 * @example
 * > raiseOdds = raiseWith(x => x % 2 === 1);
 * > raiseOdds([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
 * [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
 *
 * @since 0.1.0
 */
export const raiseWith = (predicate: Predicate<any>) =>
	_.pipe<unknown[], unknown[]>([
		_.partitionWith(_.not(predicate)),
		_.apply(concat)
	]);
