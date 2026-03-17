import * as _ from 'lamb';

import type {Obj, ObjKV} from '@datakit/types';

import {sortValueDescKeyAsc} from '../../array/array/sortValueDescKeyAsc';
import {objectToKeyValueArray} from './objectToKeyValueArray';

/**
 * Convert an object to a key-value array sorted by `value` (descending) then `key` (ascending).
 *
 * @example
 * > objectToValueDescKeyAsc({b: 1, a: 3, c: 1})
 * [{key: 'a', value: 3}, {key: 'b', value: 1}, {key: 'c', value: 1}]
 *
 * @since 0.3.0
 */
export const objectToValueDescKeyAsc = _.pipe<Obj<any>, ObjKV<any>[]>([
	objectToKeyValueArray,
	sortValueDescKeyAsc,
]);
