import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return `true` if the input number is greater than 1.
 *
 * @example
 * > isGT1(0)
 * false
 * > isGT1(2)
 * true
 *
 * @since 0.1.0
 */
export const isGT1: Predicate<number> = _.isGT(1);
