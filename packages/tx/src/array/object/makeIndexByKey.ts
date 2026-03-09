import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return an object with the provided array elements as keys and all values
 * equal to their index in the array
 *
 * @example
 * > makeIndexByKey(['a', 'b'])
 * {a: 0, b: 1}
 * > makeIndexByKey([2, -4])
 * {'2': 0, '-4': 1}
 *
 * @since 0.1.0
 */
export const makeIndexByKey = _.pipe<unknown[], Obj<number>>([
	_.zipWithIndex,
	_.fromPairs
]);
