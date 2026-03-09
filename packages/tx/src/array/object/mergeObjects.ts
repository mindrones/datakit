import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Merge all the objects in the provided array.
 * The result depends on the order of the objects in the array.
 *
 * @example
 * > mergeObjects([{a: 1}, {a: 6, b: -1}, {b: 1}])
 * {a: 6, b: 1}
 *
 * @since 0.1.0
 */
export const mergeObjects: Fn<Obj<any>[], Obj<unknown>> =
	objects => objects.reduce(
		(acc: Obj<unknown>, item: Obj<unknown>) => {
			_.forEach(_.pairs(item), ([key, value]: [string, unknown]) => {
				acc[key] = value;
			});
			return acc;
		},
		{}
	);
