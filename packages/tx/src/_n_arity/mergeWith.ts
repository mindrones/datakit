import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return a function expecting two objects to merge using the provided merge function.
 *
 * @example
 * > mergeWithSubtract = mergeWith(_.subtract)
 * > mergeWithSubtract({a: 8, b: 3}, {a: 5, b: 2, c: 7})
 * {a: 3, b: 1, c: 7}
 *
 * @since 0.1.0
 */
export const mergeWith = <V>(fn: (a: V, b: V) => V) =>
	(a: Obj<V>, b: Obj<V>): Obj<V> =>
		_.reduce(
			_.pairs(b) as [string, V][],
			(obj: Obj<V>, [bKey, bValue]: [string, V]) => {
				obj[bKey] = _.has(obj, bKey) ? fn(obj[bKey] as V, bValue) : bValue;
				return obj;
			},
			_.merge({}, a) as Obj<V>
		);
