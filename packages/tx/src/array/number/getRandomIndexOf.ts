import * as _ from 'lamb';

/**
 * Return the index of a random item of the passed array
 *
 * @example
 * > getRandomIndexOf([0, 1, 2, 3])
 * 2
 * > getRandomIndexOf([0, 1, 2, 3])
 * 1
 *
 * @since 0.1.0
 */
export const getRandomIndexOf = (array: unknown[]): number => {
	const index = _.randomInt(0, array.length - 1);

	return index;
}
