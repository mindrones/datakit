import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

import {areEqualWith} from '../array-boolean';

/**
 * Return a function expecting an object and returning `true` if its values,
 * once processed with the provided `fn` function, are all equal.
 *
 * @example
 * > areValuesEqual = areValuesEqualWith(getValue)
 * > areValuesEqual({a: {key: 'a', value: 1}, b: {key: 'b', value: 1}})
 * true
 * > areValuesEqual({a: {key: 'a', value: 1}, b: {key: 'b', value: 2}})
 * false
 *
 * @since 0.1.0
 */
export const areValuesEqualWith = <V>(fn: Fn<V, unknown>) =>
	_.pipe<Obj<V>, boolean>([
		_.values,
		areEqualWith(fn)
	]);
