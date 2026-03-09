import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return a function expecting an object and returning an array of its values
 * processed with the provided function.
 * The accessor receives (value, key) so keys can be used in the transformation.
 *
 * @example
 * > triplicatedValues = valuesWith(_.add(3));
 * > triplicatedValues({a: 1, b: 2, c: 3})
 * [4, 5, 6]
 *
 * > getFoos = valuesWith(_.getKey('foo'));
 * > getFoos({a: {foo: 1, bar: 2}, b: {foo: 15, bar: -3}})
 * [1, 15]
 *
 * > keysAndValues = valuesWith((value, key) => `${value} (${key})`);
 * > keysAndValues({a: 3, b: 5})
 * ['3 (a)', '5 (b)']
 *
 * @since 0.1.0
 */
export const valuesWith =
	<V, R>(fn: (value: V, key: string) => R) =>
		_.pipe<Obj<V>, R[]>([
			_.mapValuesWith(fn),
			_.values
		]);
