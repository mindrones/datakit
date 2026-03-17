import * as _ from 'lamb';

import type {ObjKV} from '@datakit/types';

import {sorterKeyDesc, sorterValueDesc} from '../../_sorters';

/**
 * Return a copy of the provided array with items
 * sorted by `value` (descending) then by `key` (descending)
 *
 * @since 0.3.0
 */
export const sortValueDescKeyDesc = _.sortWith<ObjKV<unknown>>([
	sorterValueDesc,
	sorterKeyDesc
]);
