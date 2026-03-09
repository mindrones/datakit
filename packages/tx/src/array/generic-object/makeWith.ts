import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

import {makeWithKeys} from '../array-object';

/**
 * Return a function returning an object by assigning the results of the provided
 * functions to the provided keys.
 *
 * @example
 * > makeCircle = makeWith([
 *   ['radius', 'perimeter', 'area'],
 *   [_.identity, r => 2 * Math.PI * r, r => Math.PI * Math.pow(r, 2)]
 * ])
 * > makeCircle(3)
 * {radius: 3, perimeter: 18.85, area: 28.27}
 * > makeCircle(4)
 * {radius: 4, perimeter: 25.13, area: 50.27}
 *
 * @since 0.1.0
 */
export const makeWith = <T>([keys, functions]: [string[], Fn<T, unknown>[]]) =>
	_.pipe<T, Obj<unknown>>([
		_.collect(functions),
		makeWithKeys(keys)
	]);
