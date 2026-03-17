import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return a function expecting an array of objects and returning an array of
 * unique values for the provided key.
 *
 * @example
 * > pluckUniquesByA = pluckUniques('a')
 * > pluckUniquesByA([{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 2}])
 * [1, 2]
 *
 * @since 0.3.0
 */
export const pluckUniques = (key: string) => _.pipe<Obj<any>[], any[]>([
	_.pluck(key),
	_.uniques,
]);
