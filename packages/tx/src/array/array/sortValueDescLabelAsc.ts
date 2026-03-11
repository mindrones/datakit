import * as _ from 'lamb';

import type {ObjKV} from '@datakit/types';

import {getLabel} from '../../object/string/getLabel';
import {sorterValueDesc} from '../../_sorters';

/**
 * Return a copy of the provided array sorted by `value` (descending) then `label` (ascending).
 *
 * @example
 * > sortValueDescLabelAsc([{key: 'a', label: 'z', value: 1}, {key: 'b', label: 'a', value: 1}])
 * [{key: 'b', label: 'a', value: 1}, {key: 'a', label: 'z', value: 1}]
 */
export const sortValueDescLabelAsc = _.sortWith<ObjKV<unknown>>([
	sorterValueDesc,
	getLabel,
]);
