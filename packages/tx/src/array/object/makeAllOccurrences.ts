import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return an object of occurrences of all the keys contained in the objects in the provided array
 *
 * @example
 * > makeAllOccurrences([{a: 1}, {a: 6, b: -1}, {a: 2, b: 0, c: 1}, {c: 4, e: 2}])
 * {a: 3, b: 2, c: 2, e: 1}
 *
 * @since 0.1.0
 */
export const makeAllOccurrences: Fn<Obj<unknown>[], Obj<number>> = items =>
	items.reduce(
		(acc: Obj<number>, item: Obj<unknown>) => {
			_.forEach(_.keys(item), key => {
				if (_.has(acc, key)) {
					acc[key] += 1;
				} else {
					acc[key] = 1;
				}
			});
			return acc;
		},
		{} as Obj<number>
	);
