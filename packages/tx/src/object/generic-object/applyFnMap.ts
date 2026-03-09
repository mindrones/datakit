import * as _ from 'lamb';

import type {Fn, FnMap, Obj} from '@datakit/types';

/**
 * Return a function expecting any kind of input to be used as the argument
 * of the provided functions
 *
 * @example
 * > array = [
 *     {fname: 'John', lname: 'Woo', lng: 1, lat: 2},
 *     {fname: 'John', lname: 'Foo', lng: 7, lat: 8}
 * ];
 * > format = applyFnMap({
 *     coords: _.collect([_.getKey('lng'), _.getKey('lat')]),
 *     fullname: _.pipe([
 *         _.collect([_.getKey('fname'), _.getKey('lname')]),
 *         _.joinWith(' ')
 *     ]),
 * });
 * > formatted = _.map(raw, format)
 * [
 *     {coords: [1, 2], fullname: 'John Woo'},
 *     {coords: [7, 8], fullname: 'John Foo'}
 * ]
 *
 * @since 0.1.0
 */
export const applyFnMap: Fn<FnMap, Fn<any, Obj<unknown>>> =
	fnMap => (input: any) => _.mapValues(fnMap, _.applyTo([input]));
