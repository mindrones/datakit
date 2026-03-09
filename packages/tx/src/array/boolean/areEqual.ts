import areEquals from 'just-compare';

import type {Predicate} from '@datakit/types';

/**
 * Return `true` if items in the provided array are equal
 *
 * @example
 * > areEqual([false, false, false])
 * true
 * > areEqual([true, false, false])
 * false
 * > areEqual([])
 * false
 * > areEqual([1])
 * false
 *
 * @since 0.1.0
 */
export const areEqual: Predicate<unknown[]> = array => {
	let result: boolean;

	if (array.length < 2) {
		result = false;
	} else {
		let index = 1;
		result = true;
		while (result && index < array.length) {
			result = result && areEquals(array[index - 1], array[index]);
			index++;
		}
	}

	return result;
};
