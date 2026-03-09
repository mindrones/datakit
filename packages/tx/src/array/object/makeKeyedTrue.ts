import type {Obj} from '@datakit/types';

import {makeKeyed} from '../../generic/array-object/makeKeyed';

/**
 * Return an object with the provided array elements as keys and all values equal to `true`
 *
 * @example
 * > makeKeyedTrue(['a', 'b'])
 * {a: true, b: true}
 *
 * @since 0.1.0
 */
export const makeKeyedTrue = makeKeyed(true) as (array: string[]) => Obj<true>;
