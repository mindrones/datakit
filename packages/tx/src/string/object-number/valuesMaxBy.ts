import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

import {arrayMaxBy} from '../array-number/arrayMaxBy';


/**
 * Return a function expecting an object of objects and returning the max of values by the provided key.
 * The same can be done by `valuesMaxWith(_.getKey(key))` but here we avoid invoking a function for all the items.
 *
 * @example
 * > maxByK1 = valuesMaxBy('k1')
 * > maxByK1({a: {k1: 1, k2: 20}, b: {k1: 3, k2: 2}})
 * 3
 * > maxByK1({a: {k1: 9, k2: 12}, b: {k1: 7, k2: 2}})
 * 9
 *
 * @since 0.1.0
 */
export const valuesMaxBy = (key: string) =>
	_.pipe<Obj<Obj<unknown>>, number>([
		_.values,
		arrayMaxBy(key)
	]);
