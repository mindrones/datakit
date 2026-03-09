import * as _ from 'lamb';

import {pairToKeyValueObject} from '../../array/object';

import type {Obj, ObjKV} from '@datakit/types';

/**
 * Return an array of {key, value} objects from an object.
 *
 * @example
 * > objectToKeyValueArray({k1: 'v1', k2: 'v2'})
 * [{key: 'k1', value: 'v1'}, {key: 'k2', value: 'v2'}]
 *
 * @since 0.1.0
 */
export const objectToKeyValueArray = _.pipe<Obj<unknown>, ObjKV<unknown>[]>([
	_.pairs,
	_.mapWith(pairToKeyValueObject)
]);
