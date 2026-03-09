import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return true if some elements of the provided array are truthy
 *
 * @example
 * > areSomeTruthy([false, true])
 * true
 * > areSomeTruthy([0, ''])
 * false
 *
 * @since 0.1.0
 */
export const areSomeTruthy: Predicate<unknown[]> = _.some(Boolean);
