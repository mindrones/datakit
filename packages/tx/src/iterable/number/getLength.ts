import * as _ from 'lamb';

import type {Fn, HasLength} from '@datakit/types';

/**
 * Get the length of the iterable
 *
 * @example
 * > getLength('a')
 * 1
 * > getLength('two')
 * 3
 * > getLength([10])
 * 1
 * > getLength([3, 7])
 * 2
 *
 * @since 0.1.0
 */
export const getLength: Fn<HasLength, number> = _.getKey('length');
