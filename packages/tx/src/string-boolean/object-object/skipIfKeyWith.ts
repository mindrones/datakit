import * as _ from 'lamb';

import type {Obj, Predicate} from '@datakit/types';

/**
 * Return a function expecting an object and returning a new object without
 * the keys satisfying the provided predicate
 *
 * @example
 * > const keysDontStartWithA = skipIfKeyWith(key => key.startsWith('a'))
 * > keysDontStartWithA({a: 1, aa: 2, b: 0, c: 0})
 * {b: 0, c: 0}
 * > keysDontStartWithA({b: 0, c: 0})
 * {b: 0, c: 0}
 *
 * @since 0.3.0
 */
export const skipIfKeyWith = <T>(predicate: Predicate<string>) =>
	_.pipe<Obj<T>, Obj<T>>([
		_.pairs,
		_.filterWith(
			_.pipe<[string, unknown], boolean>([_.head, _.not(predicate)])
		),
		_.fromPairs
	]);
