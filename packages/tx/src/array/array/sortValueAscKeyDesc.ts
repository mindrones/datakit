import * as _ from 'lamb';

import type {ObjKV} from '@datakit/types';

import {getValue} from '../../object/generic/getValue';
import {sorterKeyDesc} from '../../_sorters';

/**
 * Return a copy of the provided array with items
 * sorted by `value` (ascending) then by `key` (descending)
 */
export const sortValueAscKeyDesc = _.sortWith<ObjKV<unknown>>([
	getValue,
	sorterKeyDesc
]);
