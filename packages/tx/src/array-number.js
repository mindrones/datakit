import * as _ from 'lamb';

/**
 * Return the index of a random item of the passed array
 *
 * @function
 * @param {Array} array
 * @returns {number}
 *
 * @example
> getRandomIndex = getRandomIndexOf([0, 1, 2, 3])
> getRandomIndex()
2
> getRandomItem()
1
 *
 * @since 0.1.0
 */
export const getRandomIndexOf = array => {
	const index = _.randomInt(0, array.length - 1);

	return index;
}
