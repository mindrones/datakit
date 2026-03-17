import * as _ from 'lamb';

import type {Obj, Predicate} from '@datakit/types';

/**
 * Return a function expecting an object and returning a new object with only
 * the keys satisfying the provided predicate
 *
 * @example
 * > const keysStartWithA = pickIfKeyWith(key => key.startsWith('a'))
 * > keysStartWithA({a: 1, aa: 2, b: 0, c: 0})
 * {a: 1, aa: 2}
 * > keysStartWithA({b: 0, c: 0})
 * {}
 *
 * @since 0.3.0
 */
export const pickIfKeyWith = (predicate: Predicate<string>) =>
	_.pipe<Obj<unknown>, Obj<unknown>>([
		_.pairs,
		_.filterWith(
			_.pipe<[string, unknown], boolean>([_.head, predicate])
		),
		_.fromPairs
	]);
