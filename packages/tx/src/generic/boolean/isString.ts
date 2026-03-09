import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return true if the input is a string.
 *
 * @since 0.1.0
 */
export const isString: Predicate<unknown> = _.isType('String');
