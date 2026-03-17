import * as _ from 'lamb';

import type {ObjV} from '@datakit/types';

import {sorterValueDesc} from '../../_sorters';

/**
 * Return a copy of the provided array of key-value objects sorted by `value` (descending).
 *
 * @example
 * > sortValueDesc([{key: 'a', value: 1}, {key: 'b', value: 3}, {key: 'c', value: 2}])
 * [{key: 'b', value: 3}, {key: 'c', value: 2}, {key: 'a', value: 1}]
 *
 * @since 0.3.0
 */
export const sortValueDesc = _.sortWith<ObjV<unknown>>([sorterValueDesc]);
