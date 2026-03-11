import * as _ from 'lamb';

import type {ObjLV} from '@datakit/types';

import {sorterLabelDesc, sorterValueDesc} from '../../_sorters';

/**
 * Return a copy of the provided array sorted by `value` (descending) then `label` (descending).
 *
 * @example
 * > sortValueDescLabelDesc([{key: 'a', label: 'a', value: 1}, {key: 'b', label: 'z', value: 1}])
 * [{key: 'b', label: 'z', value: 1}, {key: 'a', label: 'a', value: 1}]
 */
export const sortValueDescLabelDesc = _.sortWith<ObjLV<unknown>>([
	sorterValueDesc,
	sorterLabelDesc,
]);
