import {makeKeyed} from '../../generic/array-object/makeKeyed';

/**
 * Return an object with the provided array elements as keys and all values equal to zero
 *
 * @example
 * > makeKeyedZeroes(['a', 'b'])
 * {a: 0, b: 0}
 * > makeKeyedZeroes([1, 2])
 * {1: 0, 2: 0}
 *
 * @since 0.1.0
 */
export const makeKeyedZeroes = makeKeyed(0);
