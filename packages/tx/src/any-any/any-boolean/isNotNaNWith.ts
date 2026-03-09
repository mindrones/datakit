import type {Fn} from '@datakit/types';

import {isNotNaN} from '../../generic/boolean/isNotNaN';

/**
 * Return a function returning true if the accessed value is not NaN
 *
 * @example
 * > isNotNaNWith(getValue)({key: 'a', value: 1})
 * true
 *
 * @since 0.1.0
 */
export const isNotNaNWith = <T>(fn: Fn<T, unknown>) =>
	(input: T): boolean => isNotNaN(fn(input));
