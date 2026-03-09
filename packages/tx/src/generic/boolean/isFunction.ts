import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return true if the input is a function.
 *
 * @since 0.1.0
 */
export const isFunction: Predicate<unknown> = _.isType('Function');
