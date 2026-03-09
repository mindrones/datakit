import * as _ from 'lamb';

import type {Fn} from '@datakit/types';

/**
 * Return the min of the numbers in the provided array
 *
 * @example
 * > arrayMin([-1, -2, 0, 1, 2])
 * -2
 *
 * @since 0.1.0
 */
export const arrayMin: Fn<number[], number> = _.apply(Math.min);
