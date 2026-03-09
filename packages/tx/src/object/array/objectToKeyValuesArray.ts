import * as _ from 'lamb';

import {pairToKeyValuesObject} from '../../array/object';

import type {Obj, ObjKVs} from '@datakit/types';

/**
 * Return an array of {key, values} objects from an object.
 *
 * @example
 * > objectToKeyValuesArray({k1: ['a', 'b'], k2: ['c', 'd']})
 * [{key: 'k1', values: ['a', 'b']}, {key: 'k2', values: ['c', 'd']}]
 *
 * @since 0.1.0
 */
export const objectToKeyValuesArray =
	_.pipe<Obj<unknown[]>, ObjKVs<unknown>[]>([
		_.pairs,
		_.mapWith(pairToKeyValuesObject)
	]);
