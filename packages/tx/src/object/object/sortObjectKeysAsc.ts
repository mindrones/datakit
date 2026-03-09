import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return a copy of the input object with enumerable properties sorted in ascending order.
 *
 * @example
 * > sortObjectKeysAsc({c: 1, a: 2, b: 15})
 * {a: 2, b: 15, c: 1}
 *
 * @since 0.1.0
 */
export const sortObjectKeysAsc = _.pipe<Obj<unknown>, Obj<unknown>>([
	_.pairs,
	_.sortWith([_.head]),
	_.fromPairs,
]);
