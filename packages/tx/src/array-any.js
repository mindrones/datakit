import {getRandomIndexOf} from './array-number.js';

/**
 * Return a random item of the passed array
 *
 * @function
 * @param {Array} array
 * @returns {any}
 *
 * @example
> getRandomItem = getRandomItemOf([0, 1, 2, 3])
> getRandomItem()
2
> getRandomItem()
1
> getRandomItem = getRandomItemOf([{a: 0}, {a: 1}, {a: 2}, {a: 3}])
> getRandomItem()
{a: 3}
> getRandomItem()
{a: 0}
 *
 * @since 0.1.0
 */
export const getRandomItemOf = array => {
	const index = getRandomIndexOf(array);

	return array[index];
}
