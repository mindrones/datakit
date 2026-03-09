import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return a function expecting an array of keys and returning an object
 * assigning the keys to the provided values.
 *
 * @example
 * > makeWithTheseValues = makeWithValues([1, 2])
 * > makeWithTheseValues(['lng', 'lat'])
 * {lng: 1, lat: 2}
 * > makeWithTheseValues(['foo', 'bar'])
 * {foo: 1, bar: 2}
 *
 * @since 0.1.0
 */
export const makeWithValues = <T>(values: T[]) =>
	(keys: string[]): Obj<T> =>
		_.make(keys, values) as Obj<T>;
