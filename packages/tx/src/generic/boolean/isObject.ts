import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return true if the input is a plain object.
 *
 * @since 0.1.0
 */
export const isObject: Predicate<unknown> = _.isType('Object');
