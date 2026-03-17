import * as _ from 'lamb';

import type {ObjLV} from '@datakit/types';

import {getLabelLowercase} from '../../object/string/getLabelLowercase';
import {sorterValueDesc} from '../../_sorters';

/**
 * Return a copy of the provided array sorted by `value` (descending) then `label` lowercase (descending).
 *
 * @example
 * > sortValueDescLabelLowercaseDesc([{key: 'a', label: 'a', value: 1}, {key: 'b', label: 'Z', value: 1}])
 * [{key: 'b', label: 'Z', value: 1}, {key: 'a', label: 'a', value: 1}]
 *
 * @since 0.3.0
 */
export const sortValueDescLabelLowercaseDesc = _.sortWith<ObjLV<unknown>>([
	sorterValueDesc,
	_.sorterDesc(getLabelLowercase),
]);
