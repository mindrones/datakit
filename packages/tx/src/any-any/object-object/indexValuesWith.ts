import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function expecting an object and returning an index of all its
 * values using the provided `fn`.
 * Use this if you're sure that applying the `fn` on the object values
 * returns unique strings.
 * Values that are arrays are flattened before indexing.
 *
 * @example
 * > reindexedByX = indexValuesWith(obj => obj.x)
 * > reindexedByX({a: {x: 'u1', y: 2}, b: {x: 'u2', y: 4}})
 * {u1: {x: 'u1', y: 2}, u2: {x: 'u2', y: 4}}
 *
 * @since 0.1.0
 */
export const indexValuesWith = <V>(fn: Fn<V, unknown>) =>
	_.pipe<Obj<V | V[]>, Obj<V>>([
		_.values,
		_.flatten,
		_.indexBy(fn)
	]);
