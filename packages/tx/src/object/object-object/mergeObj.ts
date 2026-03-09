import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function expecting an object to merge with the input object.
 *
 * @example
 * > mergeB = mergeObj({b: 2})
 * > mergeB({a: 1})
 * {a: 1, b: 2}
 * > mergeB({a: 1, b: 1})
 * {a: 1, b: 2}
 *
 * @since 0.1.0
 */
export const mergeObj: (obj: Obj<unknown>) => Fn<Obj<unknown>, Obj<unknown>> =
	target => obj => _.merge(obj, target);
