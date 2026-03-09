import {getRandomIndexOf} from '../number/getRandomIndexOf';

/**
 * Return a random item of the passed array
 *
 * @example
 * > getRandomItemOf([0, 1, 2, 3])
 * 2
 * > getRandomItemOf([0, 1, 2, 3])
 * 1
 * > getRandomItemOf([{a: 0}, {a: 1}, {a: 2}, {a: 3}])
 * {a: 3}
 * > getRandomItemOf([{a: 0}, {a: 1}, {a: 2}, {a: 3}])
 * {a: 0}
 *
 * @since 0.1.0
 */
export const getRandomItemOf = <T>(array: T[]): T => {
	const index = getRandomIndexOf(array);

	return array[index];
}
