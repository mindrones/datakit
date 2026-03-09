import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return true if the input is not undefined or null.
 *
 * @since 0.1.0
 */
export const isNotNil: Predicate<unknown> = value => !_.isNil(value);
