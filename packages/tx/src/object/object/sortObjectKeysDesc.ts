import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return a copy of the input object with enumerable properties sorted in descending order.
 *
 * @example
 * > sortObjectKeysDesc({c: 1, a: 2, b: 15})
 * {c: 1, b: 15, a: 2}
 *
 * @since 0.1.0
 */
export const sortObjectKeysDesc = _.pipe<Obj<unknown>, Obj<unknown>>([
	_.pairs,
	_.sortWith([_.sorterDesc(_.head)]),
	_.fromPairs,
]);
