import * as _ from 'lamb';

import type {ObjLV} from '@datakit/types';

import {getLabelLowercase} from '../../object/string/getLabelLowercase';
import {sorterValueDesc} from '../../_sorters';

/**
 * Return a copy of the provided array sorted by `value` (descending) then `label` lowercase (ascending).
 *
 * @example
 * > sortValueDescLabelLowercaseAsc([{key: 'a', label: 'Z', value: 1}, {key: 'b', label: 'a', value: 1}])
 * [{key: 'b', label: 'a', value: 1}, {key: 'a', label: 'Z', value: 1}]
 */
export const sortValueDescLabelLowercaseAsc = _.sortWith<ObjLV<unknown>>([
	sorterValueDesc,
	getLabelLowercase,
]);
