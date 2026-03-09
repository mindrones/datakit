import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return `true` if the input number is greater than 0.
 *
 * @example
 * > isGT0(-1)
 * false
 * > isGT0(2)
 * true
 *
 * @since 0.1.0
 */
export const isGT0: Predicate<number> = _.isGT(0);
