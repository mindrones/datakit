import * as _ from 'lamb';

import type {Fn, FnMap, Obj} from '@datakit/types';

/**
 * Return a function that expects an object and applies the functions in the
 * values of the input object to the correspondent values of the provided object.
 * Since 0.6.0 it assumes identity for missing keys.
 *
 * @example
 * > conversionFn = transformValues({
 *     name: _.identity,
 *     a: _.pipe([Number, Math.sqrt]),
 *     b: Number,
 *     width: parseFloat
 * })
 * > conversionFn({name: 'foo', a: '9', b: '2', width: '10px'})
 * {name: 'foo', a: 3, b: 2, width: 10}
 *
 * @since 0.1.0
 */
export const transformValues =
	(fnMap: FnMap): Fn<Obj<any>, Obj<any>> =>
	_.mapValuesWith(
		(value: unknown, key: string) =>
			key in fnMap ? _.application(fnMap[key], [value]) : value
	);
