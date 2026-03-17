import * as _ from 'lamb';

import type {Fn, ObjV} from '@datakit/types';

import {getValue} from '../../object/generic/getValue';

/**
 * Return a copy of the provided array of key-value objects sorted by `value` (ascending).
 *
 * @example
 * > sortValueAsc([{key: 'a', value: 3}, {key: 'b', value: 1}, {key: 'c', value: 2}])
 * [{key: 'b', value: 1}, {key: 'c', value: 2}, {key: 'a', value: 3}]
 *
 * @since 0.3.0
 */
export const sortValueAsc: Fn<ObjV<any>[], ObjV<any>[]> = _.sortWith([getValue]);
