import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return an object with swapped keys and values.
 * If there are duplicate values, the last occurrence wins.
 *
 * @example
 * > swapKeyValue({a: 1, b: 2, c: 'd'})
 * {1: 'a', 2: 'b', d: 'c'}
 * > swapKeyValue({a: 1, b: 2, c: 'd', e: 1})
 * {2: 'b', d: 'c', 1: 'e'}
 *
 * @since 0.1.0
 */
export const swapKeyValue = _.pipe<Obj<string | number>, Obj<string>>([
	_.pairs,
	_.mapWith(_.reverse),
	_.fromPairs
]);
