import * as _ from 'lamb';

import type {Obj, ObjKV} from '@datakit/types';

import {pairToKeyValueObjectWith} from '../../any-any/iterable-object/pairToKeyValueObjectWith';

/**
 * Return a function expecting an object and returning an array of {key, value}
 * objects, using the provided `fn` to get the `value` of each object.
 *
 * @example
 * > obj = {k1: {a: 1}, k2: {a: 2}}
 * > convertToArray = objectToKeyValueArrayWith(_.getKey('a'))
 * > convertToArray(obj)
 * [{key: 'k1', value: 1}, {key: 'k2', value: 2}]
 *
 * @since 0.1.0
 */
export const objectToKeyValueArrayWith =
	<V, R>(fn: (value: V, key?: string) => R) =>
		_.pipe<Obj<V>, ObjKV<R>[]>([
			_.pairs,
			_.mapWith(pairToKeyValueObjectWith(fn))
		]);
