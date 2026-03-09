import * as _ from 'lamb';

import type {Fn} from '@datakit/types';

/**
 * Return the sum of the numbers in the provided array
 *
 * @example
 * > arraySum([1, -2, 3, -4, 5])
 * 3
 * > arraySum([])
 * 0
 *
 * @since 0.1.0
 */
export const arraySum: Fn<number[], number> = _.reduceWith(_.sum, 0);
