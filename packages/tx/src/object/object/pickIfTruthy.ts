import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return a copy of the object without falsy values.
 *
 * @example
 * > pickIfTruthy({a: true, b: true, c: false})
 * {a: true, b: true}
 * > pickIfTruthy({a: 1, b: 0, c: false})
 * {a: 1}
 * > pickIfTruthy({a: [1, 2], b: {a: 1}, c: false})
 * {a: [1, 2], b: {a: 1}}
 *
 * @since 0.1.0
 */
export const pickIfTruthy: Fn<Obj<unknown>, Obj<unknown>> =
	_.pickIf(Boolean);
