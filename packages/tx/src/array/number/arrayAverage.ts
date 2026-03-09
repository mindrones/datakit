import {getLength} from '../../iterable/number/getLength';

import {arraySum} from './arraySum';

import type {Fn} from '@datakit/types';

/**
 * Return the average of the numbers in the provided array
 *
 * @example
 * > arrayAverage([1, 23, 6])
 * 10
 * > arrayAverage([])
 * 0
 *
 * @since 0.1.0
 */
export const arrayAverage: Fn<number[], number> = array => {
	const sum = arraySum(array);
	const length = getLength(array) as number;
	return length ? sum / length : 0;
};
