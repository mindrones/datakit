import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return a function expecting an array of values and returning an object
 * assigning the values to the provided keys.
 *
 * @example
 * > makeWithLatLng = makeWithKeys(['lng', 'lat'])
 * > makeWithLatLng([1, 2])
 * {lng: 1, lat: 2}
 * > makeWithLatLng([10, 20])
 * {lng: 10, lat: 20}
 *
 * @since 0.1.0
 */
export const makeWithKeys = (keys: string[]) =>
	(values: unknown[]): Obj<unknown> =>
		_.make(keys, values) as Obj<unknown>;
