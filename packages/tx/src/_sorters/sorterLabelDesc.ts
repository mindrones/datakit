import * as _ from 'lamb';

import type {ObjL} from '@datakit/types';

import {getLabel} from '../object/string/getLabel';

/**
 * A descending sorter for arrays of objects with a `label` property.
 * Use with `_.sortWith` to sort by `label` descending.
 *
 * @example
 * > _.sortWith([sorterLabelDesc])([{label: 'a'}, {label: 'c'}, {label: 'b'}])
 * [{label: 'c'}, {label: 'b'}, {label: 'a'}]
 */
export const sorterLabelDesc: _.Sorter<ObjL, true> = _.sorterDesc(getLabel);
