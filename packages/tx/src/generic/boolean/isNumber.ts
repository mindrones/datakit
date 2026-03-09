import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return true if the input is a number (including NaN and Infinity).
 *
 * @since 0.1.0
 */
export const isNumber: Predicate<unknown> = _.isType('Number');
