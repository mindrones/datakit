import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return true if all elements of the provided array are truthy
 *
 * @example
 * > areAllTruthy([true, true])
 * true
 * > areAllTruthy([1, [], [1, 2], {}, {a: 1}, 'a'])
 * true
 * > areAllTruthy([false, true])
 * false
 * > areAllTruthy([0, {a: 1}])
 * false
 *
 * @since 0.1.0
 */
export const areAllTruthy: Predicate<unknown[]> = _.every(Boolean);
