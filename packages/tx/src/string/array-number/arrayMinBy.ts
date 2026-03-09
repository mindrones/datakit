import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function expecting an array of objects and returning the min of values by the provided key.
 * The same can be done by `arrayMinWith(_.getKey(key))` but here we avoid invoking a function for all the items.
 *
 * @example
 * > minByA = arrayMinBy('a')
 * > minByA([{a: -1, b: -1}, {a: 0, b: 0}])
 * -1
 * > minByA([{a: 1, b: 1}, {a: 2, b: -2}])
 * 1
 *
 * @since 0.1.0
 */
export const arrayMinBy = (key: string): Fn<Obj<unknown>[], number> =>
	array => array.reduce((min, item) => {
		const value = item[key] as number;

		// no need to check if key is present because:
		// undefined < Infinity === false
		return value < min ? value : min;
	}, Infinity);
