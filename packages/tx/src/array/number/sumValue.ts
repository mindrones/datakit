import type {Fn, ObjV} from '@datakit/types';

import {arraySumWith} from '../../any-number/array-number/arraySumWith';
import {getValue} from '../../object/generic/getValue';

/**
 * Return the sum of the `value` properties from the provided array of key-value objects.
 *
 * @example
 * > sumValue([{key: 'a', value: 1}, {key: 'b', value: 2}, {key: 'c', value: 3}])
 * 6
 * > sumValue([])
 * 0
 */
export const sumValue: Fn<ObjV<number>[], number> = arraySumWith(getValue);
