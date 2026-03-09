import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return `true` if the input number is 0.
 *
 * @example
 * > is0(0)
 * true
 * > is0(2)
 * false
 *
 * @since 0.1.0
 */
export const is0: Predicate<number> = _.is(0);
