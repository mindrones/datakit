import areEquals from 'just-compare';
import * as _ from 'lamb';

/**
 * Return a copy of the provided array without all instances of the provided item
 * if the item is in the array, or appending the item otherwise.
 *
 * @example
 * > toggleItem([0, 1, 2, 0], 0)
 * [1, 2]
 * > toggleItem([1, 2], 0)
 * [1, 2, 0]
 *
 * @since 0.1.0
 */
export const toggleItem = <T>(array: T[], item: T): T[] => {
	let found = false;

	const result = _.reduce(
		array,
		(acc: T[], x: T) => {
			if (areEquals(x, item)) {
				found = true;
			} else {
				acc.push(x);
			}
			return acc;
		},
		[]
	);

	if (!found) {
		result.push(item);
	}

	return result;
};
