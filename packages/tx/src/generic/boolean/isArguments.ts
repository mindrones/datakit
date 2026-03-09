import * as _ from 'lamb';

import type {Predicate} from '@datakit/types';

/**
 * Return true if the input is an arguments list.
 *
 * @since 0.1.0
 */
export const isArguments: Predicate<unknown> = _.isType('Arguments');
