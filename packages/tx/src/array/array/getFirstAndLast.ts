import * as _ from 'lamb';

import type {Maybe} from '@datakit/types';

/**
 * Return an array containing the first and the last element of the provided array.
 *
 * @example
 * > getFirstAndLast([0, 1, 2, 3, 4])
 * [0, 4]
 * > getFirstAndLast([0])
 * [0, 0]
 * > getFirstAndLast([])
 * [undefined, undefined]
 *
 * @since 0.1.0
 */
export const getFirstAndLast =
	<T>(array: T[]): [Maybe<T>, Maybe<T>] => [
		_.head(array) as Maybe<T>,
		_.last(array) as Maybe<T>
	];
