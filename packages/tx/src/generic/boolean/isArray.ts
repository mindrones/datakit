import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return true if the input is an array.
 *
 * @since 0.1.0
 */
export const isArray: Predicate<unknown> = _.isType('Array');
