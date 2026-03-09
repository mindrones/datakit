import type {Fn} from '@datakit/types';
import areEquals from 'just-compare';

/**
 * Return a function returning `true` if all the items of an array are equal
 * once processed with the provided `fn`
 *
 * @example
 * > areEqualByValue = areEqualWith(getValue)
 * > areEqualByValue([{key: 'a', value: 1}, {key: 'b', value: 1}])
 * true
 * > areEqualByValue([{key: 'a', value: 1}, {key: 'b', value: 2}])
 * false
 * > areEqualByValue([{key: 'a', value: 1}])
 * false
 * > areEqualByValue([])
 * false
 *
 * @since 0.1.0
 */
export const areEqualWith = <T>(fn: Fn<T, unknown>) =>
	(array: T[]): boolean => {
		if (array.length < 2) {
			return false;
		}

		const values = [fn(array[0])];
		let index = 1;
		let result = true;

		while (result && index < array.length) {
			const value = fn(array[index]);
			values.push(value);
			result = result && areEquals(values[index - 1], value);
			index++;
		}

		return result;
	};
