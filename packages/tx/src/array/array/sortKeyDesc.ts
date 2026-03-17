import * as _ from 'lamb';

import type {Fn, ObjK} from '@datakit/types';

import {sorterKeyDesc} from '../../_sorters';

/**
 * Return a copy of the provided array of key-value objects sorted by `key` (descending).
 *
 * @example
 * > sortKeyDesc([{key: 'a', value: 1}, {key: 'c', value: 2}, {key: 'b', value: 3}])
 * [{key: 'c', value: 2}, {key: 'b', value: 3}, {key: 'a', value: 1}]
 *
 * @since 0.3.0
 */
export const sortKeyDesc: Fn<ObjK[], ObjK[]> = _.sortWith([sorterKeyDesc]);
