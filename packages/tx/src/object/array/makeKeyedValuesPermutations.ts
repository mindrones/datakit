import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

import {isArray} from '../../generic/boolean/isArray';
import {isIterableNotEmpty} from '../../iterable/boolean';


/**
 * Return an array of the permutations of the provided object values items, by key.
 * Note that this function assumes the provided object values are arrays.
 *
 * @example
 * > makeKeyedValuesPermutations({a: [0, 1], b: [2, 3], c: [4, 5]})
 * [
 *   {a: 0, b: 2, c: 4}, {a: 1, b: 2, c: 4},
 *   {a: 0, b: 3, c: 4}, {a: 1, b: 3, c: 4},
 *   {a: 0, b: 2, c: 5}, {a: 1, b: 2, c: 5},
 *   {a: 0, b: 3, c: 5}, {a: 1, b: 3, c: 5}
 * ]
 *
 * @since 0.1.0
 */
export const makeKeyedValuesPermutations =
	_.pipe<Obj<unknown>, unknown[]>([
		_.pairs,
		_.filterWith(_.pipe<[string, unknown[]], boolean>([
			_.last,
			_.allOf([isArray, isIterableNotEmpty])
		])),
		(arr: [string, unknown[]][]) => arr.reduce(
			(acc: Obj<unknown>[], [key, values]: [string, unknown[]]) => {
				const props = values.map(value => ({[key]: value}));

				return acc.length === 0
					? props
					: _.flatMap(
						props,
						prop => acc.map(obj => _.merge(obj, prop))
					);
			},
			[] as Obj<unknown>[]
		)
	]);
