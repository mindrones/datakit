import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

import {arrayMaxWith} from '../../any-number/array-number/arrayMaxWith';

/**
 * Return a function expecting an object, applying the provided function to its
 * values and returning the largest of the results.
 *
 * @example
 * > maxWithAbsSin = valuesMaxWith(_.pipe([Math.sin, Math.abs]))
 * > maxWithAbsSin({a: -Math.PI/2, b: -Math.PI/4})
 * 1
 * > maxWithAbsSin({a: -Math.PI/4, b: -Math.PI/6})
 * 0.7071067811865475
 *
 * @since 0.1.0
 */
export const valuesMaxWith = <V>(fn: Fn<V, number>) =>
	_.pipe<Obj<V>, number>([
		_.values,
		arrayMaxWith(fn)
	]);
