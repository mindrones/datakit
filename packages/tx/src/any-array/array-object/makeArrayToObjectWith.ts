import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return a function expecting an array and returning an object
 * with keys and values defined by the provided function, which expects a value
 * and returns a pair [key, value].
 *
 * @example
 * > valueToPair = x => [`${x}${x}`, `${x}${x}${x}`];
 * > arrayToObject1 = makeArrayToObjectWith(valueToPair)
 * > arrayToObject1(['a', 'b', 1])
 * {aa: 'aaa', bb: 'bbb', 11: '111'}
 *
 * > valueIndexToPair = (x, i) => [`${i}${i}`, `${x}${x}${x}`];
 * > arrayToObject2 = makeArrayToObjectWith(valueIndexToPair)
 * > arrayToObject2(['a', 'b', 1])
 * {'00': 'aaa', '11': 'bbb', '22': '111'}
 *
 * @since 0.1.0
 */
export const makeArrayToObjectWith =
	<V, R>(valueIndexToPair: (value: V, index: number) => [PropertyKey, R]) =>
		_.pipe<V[], Obj<R>>([
			_.mapWith(valueIndexToPair),
			_.fromPairs,
		]);
