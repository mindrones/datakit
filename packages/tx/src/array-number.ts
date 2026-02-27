import * as _ from 'lamb';

/**
 * Return the index of a random item of the passed array
 *
 * @example
 * > getRandomIndex = getRandomIndexOf([0, 1, 2, 3])
 * > getRandomIndex()
 * 2
 * > getRandomIndex()
 * 1
 *
 * @since 0.1.0
 */
export const getRandomIndexOf = (array: unknown[]): number => {
	const index = _.randomInt(0, array.length - 1);

	return index;
}
