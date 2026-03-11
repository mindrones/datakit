import type {Fn, Obj} from '@datakit/types';

import {makeKeyed} from '../../generic/array-object/makeKeyed';

/**
 * Return an object with the provided array elements as keys and all values equal to `null`
 *
 * @example
 * > makeKeyedNull(['a', 'b'])
 * {a: null, b: null}
 */
export const makeKeyedNull: Fn<Array<string | number>, Obj<null>> =
	makeKeyed(null);
