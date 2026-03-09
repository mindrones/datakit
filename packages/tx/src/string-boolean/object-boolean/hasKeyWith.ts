import * as _ from 'lamb';

import type {Obj, Predicate} from '@datakit/types';

/**
 * Return a function expecting an object and returning `true` if the input
 * object has a key satisfying the provided predicate
 *
 * @example
 * > const hasA = hasKeyWith(x => x === 'a')
 * > hasA({a: 2, b: 4, c: 3})
 * true
 * > hasA({b: 4, c: 3})
 * false
 *
 * @since 0.1.0
 */
export const hasKeyWith = (predicate: Predicate<string>) =>
	_.pipe<Obj<unknown>, boolean>([
		_.keys,
		_.some(predicate)
	]);
