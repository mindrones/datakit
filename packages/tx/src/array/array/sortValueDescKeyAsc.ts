import * as _ from 'lamb';

import type {ObjKV} from '@datakit/types';

import {getKey} from '../../object/generic/getKey';
import {sorterValueDesc} from '../../_sorters';

/**
 * Return a copy of the provided array with items
 * sorted by `value` (descending) then by `key` (ascending)
 */
export const sortValueDescKeyAsc = _.sortWith<ObjKV<unknown>>([
	sorterValueDesc,
	getKey
]);
