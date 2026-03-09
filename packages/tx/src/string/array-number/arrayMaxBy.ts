import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function expecting an array of objects and returning the max of values by the provided key.
 * The same can be done by `arrayMaxWith(_.getKey(key))` but here we avoid invoking a function for all the items.
 *
 * @example
 * > maxByA = arrayMaxBy('a')
 * > maxByA([{a: -1, b: -1}, {a: 0, b: 0}])
 * 0
 * > maxByA([{a: 1, b: 1}, {a: 2, b: -2}])
 * 2
 *
 * @since 0.1.0
 */
export const arrayMaxBy = (key: string): Fn<Obj<unknown>[], number> =>
	array => array.reduce((max, item) => {
		const value = item[key] as number;

		// no need to check if key is present because:
		// undefined > -Infinity === false
		return value > max ? value : max;
	}, -Infinity);
