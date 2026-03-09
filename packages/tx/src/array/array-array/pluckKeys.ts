import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function plucking the provided keys from each object in the expected array.
 *
 * @example
 * > select = pluckKeys(['a', 'k'])
 * > select([
 *   {a: 1, b: 2, c: 3, k: 4},
 *   {a: 5, b: 8},
 * ])
 * [{a: 1, k: 4}, {a: 5}]
 *
 * @since 0.1.0
 */
export const pluckKeys =
	(keys: string[]): Fn<Obj<unknown>[], Obj<unknown>[]> =>
		_.mapWith(_.pick(keys));
