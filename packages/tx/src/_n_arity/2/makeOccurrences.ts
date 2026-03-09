import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

import {makeKeyedZeroes} from '../../array/object/makeKeyedZeroes';

/**
 * Return an object of occurrences of keys in the provided array containing the provided keys
 *
 * @example
 * > makeOccurrences([{a: 1}, {a: 6, b: -1}, {a: 2, b: 0, c: 1}], ['a', 'b'])
 * {a: 3, b: 2}
 *
 * @since 0.1.0
 */
export const makeOccurrences = (
	items: Obj<unknown>[],
	keys: string[]
): Obj<number> =>
	_.reduce(
		items,
		(acc: Obj<number>, item: Obj<unknown>) => {
			_.forEach(keys, key => {
				if (_.has(item, key)) {
					acc[key] += 1;
				}
			});
			return acc;
		},
		makeKeyedZeroes(keys)
	);
