import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return a function that returns true if the input is different from the provided value.
 *
 * @example
 * > isNotTwo = isNot(2)
 * > isNotTwo(3)
 * true
 * > isNotTwo(2)
 * false
 *
 * @since 0.1.0
 */
export const isNot = <T>(x: T): Predicate<unknown> => _.not(_.is(x));
