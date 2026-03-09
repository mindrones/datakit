import * as _ from 'lamb';

import type {Fn} from '@datakit/types';

/**
 * Return the max of the numbers in the provided array
 *
 * @example
 * > arrayMax([-1, -2, 0, 1, 2])
 * 2
 *
 * @since 0.1.0
 */
export const arrayMax: Fn<number[], number> = _.apply(Math.max);
