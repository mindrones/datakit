import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

import {arrayMinWith} from '../array-number/arrayMinWith';

/**
 * Return a function expecting an object, applying the provided function to its
 * values and returning the lowest of the results.
 *
 * @example
 * > minWithAbsSin = valuesMinWith(_.pipe([Math.sin, Math.abs]))
 * > minWithAbsSin({a: -Math.PI/2, b: -Math.PI/4})
 * 0.7071067811865475
 * > minWithAbsSin({a: -Math.PI/4, b: -Math.PI/6})
 * 0.49999999999999994
 *
 * @since 0.1.0
 */
export const valuesMinWith = <V>(fn: Fn<V, number>) =>
	_.pipe<Obj<V>, number>([
		_.values,
		arrayMinWith(fn)
	]);
