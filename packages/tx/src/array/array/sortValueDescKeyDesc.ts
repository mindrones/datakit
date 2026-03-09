import * as _ from 'lamb';

import type {Fn, ObjKV} from '@datakit/types';

import {getKey} from '../../object/generic/getKey';
import {getValue} from '../../object/generic/getValue';

/**
 * Return a copy of the provided array with items
 * sorted by `value` (descending) then by `key` (descending)
 *
 * @since 0.1.0
 */
export const sortValueDescKeyDesc: Fn<ObjKV<unknown>[], ObjKV<unknown>[]> =
	_.sortWith([_.sorterDesc(getValue), _.sorterDesc(getKey)]);
