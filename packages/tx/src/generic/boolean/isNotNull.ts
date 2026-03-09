import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return true if the input is not null.
 *
 * @since 0.1.0
 */
export const isNotNull: Predicate<unknown> = value => !_.isNull(value);
