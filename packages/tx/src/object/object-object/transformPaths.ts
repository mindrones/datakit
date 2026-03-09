import * as _ from 'lamb';

import type {Fn, FnMap, Obj} from '@datakit/types';

/**
 * Return a function that expects an object and applies the functions in the
 * values of the input object to the values of the provided object found in
 * the paths in the correspondent keys.
 *
 * @example
 * > transform = transformPaths({
 *     'a.a2.a22': _.pipe([Number, Math.sqrt]),
 *     'a.a3': parseInt,
 *     'b.b2': parseInt,
 * })
 * > transform({a: {a1: 'a1', a2: {a21: 'a21', a22: '9'}, a3: '3px', a4: '2'}, b: {b1: 'b1', b2: '4px'}})
 * {a: {a1: 'a1', a2: {a21: 'a21', a22: 3}, a3: 3, a4: '2'}, b: {b1: 'b1', b2: 4}}
 *
 * @since 0.1.0
 */
export const transformPaths =
	(pathToFn: FnMap): Fn<Obj<any>, Obj<any>> =>
	obj =>
		_.reduce(
			_.pairs(pathToFn),
			(acc: Obj<unknown>, [path, fn]: [string, (value: any) => unknown]) => {
				const value = _.getPathIn(acc, path);

				return _.setPathIn(acc, path, _.application(fn, [value])) as Obj<unknown>;
			},
			_.merge({}, obj) as Obj<unknown>
		);
