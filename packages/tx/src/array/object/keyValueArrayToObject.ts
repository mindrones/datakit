import * as _ from 'lamb';

import type {Obj, ObjKV} from '@datakit/types';

/**
 * Return an object built using 'key's and 'value's from the objects in the provided array
 *
 * @example
 * > keyValueArrayToObject([
 *   {key: 'ITA', value: 0},
 *   {key: 'FRA', value: 0},
 * ])
 * { ITA: 0, FRA: 0 }
 *
 * @since 0.1.0
 */
export const keyValueArrayToObject = <V>(objects: ObjKV<V>[]): Obj<V> =>
	_.reduce(
		objects,
		(acc: Obj<V>, {key, value}: ObjKV<V>) => {
			acc[key] = value;
			return acc;
		},
		{} as Obj<V>
	);
