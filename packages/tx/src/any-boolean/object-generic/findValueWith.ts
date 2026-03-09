import * as _ from 'lamb';

import type {Obj, Predicate} from '@datakit/types';

/**
 * Return a function expecting an object and returning the first of its values
 * satisfying the provided predicate.
 *
 * @example
 * > findFirstOdd = findValueWith(x => x % 2 === 1);
 * > findFirstOdd({a: 2, b: 4, c: 3, d: 6, e: 7})
 * 3
 * > findItem = findValueWith(isKeyValue(['max', 10]))
 * > findItem({a: {id: 'foo', min: 1, max: 2}, b: {id: 'bar', min: -1, max: 10}, c: {id: 'baz', min: -4, max: 10}})
 * {id: 'bar', min: -1, max: 10}
 *
 * @since 0.1.0
 */
export const findValueWith = <T>(predicate: Predicate<T>) =>
	_.pipe<Obj<T>, T | undefined>([
		_.values,
		_.findWhere(predicate)
	]);
