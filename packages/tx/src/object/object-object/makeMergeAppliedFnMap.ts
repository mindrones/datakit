import * as _ from 'lamb';

import {applyFnMap} from '../../object/generic-object/applyFnMap';

import type {Fn, FnMap, Obj} from '@datakit/types';

/**
 * Return a function that applies the provided map to the expected object and
 * merges the result to the object.
 * This is useful to add new properties to an object, eventually modifying
 * existing ones by using keys expected to be in the input objects.
 *
 * @example
 * > enhancer = makeMergeAppliedFnMap({
 *     coords: _.collect([_.getKey('lng'), _.getKey('lat')]),
 *     fullname: _.pipe([
 *         _.collect([_.getKey('fname'), _.getKey('lname')]),
 *         _.joinWith(' ')
 *     ]),
 *     lat: obj => roundTo2(obj.lat),
 *     lng: obj => roundTo2(obj.lng),
 * })
 * > enhancer({fname: 'John', lat: 2.345434, lname: 'Woo', lng: 10.3425})
 * {coords: [10.3425, 2.345434], fname: 'John', fullname: 'John Woo', lat: 2.35, lname: 'Woo', lng: 10.34}
 *
 * @since 0.1.0
 */
export const makeMergeAppliedFnMap = (fnMap: FnMap): Fn<Obj<any>, Obj<any>> => {
	const makeProps = applyFnMap(fnMap);

	return obj => _.merge(obj, makeProps(obj) as Obj<unknown>);
};
