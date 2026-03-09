import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function expecting an array and returning an object of occurrences
 * of all the keys contained in the property reachable with the provided `fn`
 * in the items of the provided array.
 *
 * @example
 * > items = [
 *   {foo: 1, bar: {a: 1}},
 *   {foo: 1, bar: {a: 6, b: -1}},
 *   {foo: 1, bar: {a: 2, b: 0, c: 1}},
 *   {foo: 1, bar: {c: 4, e: 2}},
 * ]
 * > makeAllOccurrences = makeAllOccurrencesWith(_.getKey('bar'))
 * > makeAllOccurrences(items)
 * {a: 3, b: 2, c: 2, e: 1}
 *
 * @since 0.1.0
 */
export const makeAllOccurrencesWith = <T>(fn: Fn<T, Obj<unknown>>) =>
	(arr: T[]): Obj<number> =>
		arr.reduce<Obj<number>>((acc, item) => {
			for (const key of Object.keys(fn(item))) {
				if (Object.prototype.hasOwnProperty.call(acc, key)) {
					acc[key] += 1;
				} else {
					acc[key] = 1;
				}
			}
			return acc;
		}, {});
