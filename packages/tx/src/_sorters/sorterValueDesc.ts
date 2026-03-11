import * as _ from 'lamb';

import type {ObjV} from '@datakit/types';

import {getValue} from '../object/generic/getValue';

/**
 * A descending sorter for arrays of objects with a `value` property.
 * Use with `_.sortWith` to sort by `value` descending.
 *
 * @example
 * > _.sortWith([sorterValueDesc])([{key: 'a', value: 1}, {key: 'b', value: 3}])
 * [{key: 'b', value: 3}, {key: 'a', value: 1}]
 */
export const sorterValueDesc: _.Sorter<ObjV<any>, true> = _.sorterDesc(getValue);
