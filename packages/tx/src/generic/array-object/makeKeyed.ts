import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return a function expecting an array of keys and returning an object with
 * the provided value as value of those keys.
 *
 * @example
 * > makeKeyedEmptyArray = makeKeyed([])
 * > makeKeyedEmptyArray([1, 2])
 * {1: [], 2: []}
 * > makeKeyedEmptyArray(['a', 'b'])
 * {a: [], b: []}
 *
 * @since 0.1.0
 */
export const makeKeyed = <T>(value: T) => _.pipe<Array<PropertyKey>, Obj<T>>([
	_.collect([_.identity, _.mapWith(_.always(value))]),
	_.apply(_.make)
]);
