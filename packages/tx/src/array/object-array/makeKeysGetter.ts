import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function expecting an object and returning an array of values
 * corresponding to the provided keys.
 *
 * @example
 * > getCoordinates = makeKeysGetter(['lng', 'lat'])
 * > getCoordinates({name: 'London', lat: 51.507222, lng: -0.1275, population: 8825000})
 * [-0.1275, 51.507222]
 *
 * @since 0.1.0
 */
const _makeKeysGetter = _.pipe<string[], Fn<Obj<any>, Array<unknown>>>([
	_.mapWith(_.getKey),
	_.collect
]);

export const makeKeysGetter = <T = unknown>(keys: string[]): Fn<Obj<any>, Array<T>> =>
	_makeKeysGetter(keys) as Fn<Obj<any>, Array<T>>;
