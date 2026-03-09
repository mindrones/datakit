import {arraySumWith} from '../../any-number/array-number/arraySumWith';
import {getLength} from '../../iterable/number/getLength';
import {getValue} from '../../object/generic/getValue';

import type {ObjKV} from '@datakit/types';

/**
 * Return the average of values of a {key, value}[] array
 *
 * @example
 * > keyValueArrayAverage([
 *   {key: 'a', value: 1},
 *   {key: 'b', value: 23},
 *   {key: 'c', value: 6},
 * ])
 * 10
 * > keyValueArrayAverage([])
 * 0
 *
 * @since 0.1.0
 */
export const keyValueArrayAverage: (array: ObjKV<number>[]) => number =
	array => {
		const sum = arraySumWith(getValue)(array) as number;
		const length = getLength(array) as number;
		return length ? sum / length : 0;
	};
