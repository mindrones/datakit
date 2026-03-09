import * as _ from 'lamb';

import type {Obj, Predicate} from '@datakit/types';

/**
 * Return a function that checks if the expected string is a key of the
 * provided object.
 *
 * @example
 * > isKeyOfObj = isKeyOf({a: 1, b: 2})
 * > isKeyOfObj('a')
 * true
 * > isKeyOfObj('c')
 * false
 *
 * @since 0.1.0
 */
export const isKeyOf = (obj: Obj<unknown>): Predicate<string> =>
	key => _.has(obj, key);
