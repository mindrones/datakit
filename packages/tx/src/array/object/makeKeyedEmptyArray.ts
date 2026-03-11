import type {Fn, Obj} from '@datakit/types';

import {makeKeyed} from '../../generic/array-object/makeKeyed';

/**
 * Return an object with the provided array elements as keys and all values equal to `[]`
 *
 * @example
 * > makeKeyedEmptyArray(['a', 'b'])
 * {a: [], b: []}
 */
export const makeKeyedEmptyArray: Fn<Array<string | number>, Obj<any[]>> =
	makeKeyed([]);
