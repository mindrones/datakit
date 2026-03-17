import * as _ from 'lamb';

import type {ObjK} from '@datakit/types';

import {getKey} from '../../object/generic/getKey';

/**
 * Return a copy of the provided array of key-value objects sorted by `key` (ascending).
 *
 * @example
 * > sortKeyAsc([{key: 'b', value: 1}, {key: 'a', value: 2}])
 * [{key: 'a', value: 2}, {key: 'b', value: 1}]
 *
 * @since 0.3.0
 */
export const sortKeyAsc = _.sortWith<ObjK>([getKey]);
