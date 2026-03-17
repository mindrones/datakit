import type {Fn, Obj} from '@datakit/types';

import {makeKeyed} from '../../generic/array-object/makeKeyed';

/**
 * Return an object with the provided array elements as keys and all values equal to `null`
 *
 * @example
 * > makeKeyedNull(['a', 'b'])
 * {a: null, b: null}
 *
 * @since 0.3.0
 */
export const makeKeyedNull: Fn<Array<string | number>, Obj<null>> =
	makeKeyed(null);
