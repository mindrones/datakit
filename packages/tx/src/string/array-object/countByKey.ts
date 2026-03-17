import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function expecting an array of objects and counting their values
 * for the provided key.
 *
 * @example
 * > countA = countByKey('a')
 * > countA([{a: 1, b: 2}, {a: 1, b: 4}, {a: 'foo', b: 6}, {a: 'bar', b: 7}])
 * {'1': 2, 'foo': 1, 'bar': 1}
 *
 * @since 0.3.0
 */
export const countByKey = (key: string): Fn<Obj<unknown>[], Obj<number>> =>
	_.countBy(_.getKey(key));
