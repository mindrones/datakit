import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function that merges the provided value on the provided key of the
 * expected object.
 *
 * @example
 * > mergeFooValue = makeMergeKeyValue('foo', {b: -2, c: -3})
 * > mergeFooValue({foo: {a: 1, b: 2}, bar: {k: 1}})
 * {foo: {a: 1, b: -2, c: -3}, bar: {k: 1}}
 * > mergeFooValue({bar: {k: 1}})
 * {foo: {b: -2, c: -3}, bar: {k: 1}}
 *
 * @since 0.1.0
 */
export const makeMergeKeyValue =
	<V extends Obj<unknown>>(key: string, value: V): Fn<Obj<unknown>, Obj<unknown>> =>
		object =>
			_.merge(object, {
				[key]: object[key]
					? _.merge(object[key] as Obj<unknown>, value)
					: value,
			});
