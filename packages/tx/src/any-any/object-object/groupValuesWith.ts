import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function expecting an object and returning an object grouping its
 * values using the provided `fn`.
 * Values that are arrays are flattened before grouping.
 *
 * @example
 * > regroupedByX = groupValuesWith(obj => obj.x)
 * > regroupedByX({a: {x: 1, y: 2}, b: {x: 3, y: 4}, c: {x: 'a', y: 6}, d: {x: 1, y: 8}})
 * {1: [{x: 1, y: 2}, {x: 1, y: 8}], 3: [{x: 3, y: 4}], a: [{x: 'a', y: 6}]}
 *
 * @since 0.1.0
 */
export const groupValuesWith = <V>(fn: Fn<V, unknown>) =>
	(obj: Obj<V | V[]>): Obj<V[]> => {
		const flatValues = (Object.values(obj) as unknown[]).flat() as V[];
		return _.groupBy(fn)(flatValues) as Obj<V[]>;
	};
