import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return `true` if the input number is 1.
 *
 * @example
 * > is1(1)
 * true
 * > is1(2)
 * false
 *
 * @since 0.1.0
 */
export const is1: Predicate<number> = _.is(1);
