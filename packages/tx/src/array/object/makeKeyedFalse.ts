import type {Obj} from '@datakit/types';

import {makeKeyed} from '../../generic/array-object/makeKeyed';

/**
 * Return an object with the provided array elements as keys and all values equal to `false`
 *
 * @example
 * > makeKeyedFalse(['a', 'b'])
 * {a: false, b: false}
 *
 * @since 0.1.0
 */
export const makeKeyedFalse = (array: string[]): Obj<false> =>
	makeKeyed(false)(array) as Obj<false>;
