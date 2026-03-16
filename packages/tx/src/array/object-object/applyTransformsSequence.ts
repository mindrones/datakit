import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function that expects an object and applies the provided sequence of
 * transforms to the values of the correspondent paths to the input object.
 * Note that transforms to the same path can be repeated.
 *
 * @example
 * > transform = applyTransformsSequence([
 *     ['a.a2.a22', _.pipe([Number, Math.sqrt])],
 *     ['a.a3', parseInt],
 *   ])
 * > transform({a: {a2: {a22: '9'}, a3: '3px'}})
 * {a: {a2: {a22: 3}, a3: 3}}
 *
 * @since 0.1.0
 */
export const applyTransformsSequence =
	(pathFnPairs: [string, Fn<any, any>][]): Fn<Obj<unknown>, Obj<unknown>> =>
		obj =>
			_.reduce(
				pathFnPairs,
				(acc: Obj<unknown>, [path, fn]: [string, Fn<any, any>]) =>
					_.updatePathIn(acc, path, fn) as Obj<unknown>,
				{...obj}
			);
