import * as _ from 'lamb';

import type {ObjK} from '@datakit/types';

import {getKey} from '../object/generic/getKey';

/**
 * A descending sorter for arrays of objects with a `key` property.
 * Use with `_.sortWith` to sort by `key` descending.
 *
 * @example
 * > _.sortWith([sorterKeyDesc])([{key: 'b', value: 1}, {key: 'c', value: 2}])
 * [{key: 'c', value: 2}, {key: 'b', value: 1}]
 *
 * @since 0.3.0
 */
export const sorterKeyDesc: _.Sorter<ObjK, true> = _.sorterDesc(getKey);
