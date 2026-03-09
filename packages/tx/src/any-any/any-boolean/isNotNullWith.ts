import type {Fn} from '@datakit/types';

import {isNotNull} from '../../generic/boolean/isNotNull';

/**
 * Return a function returning true if the accessed value is not null
 *
 * @example
 * > isNotNullWith(getValue)({key: 'a', value: 1})
 * true
 *
 * @since 0.1.0
 */
export const isNotNullWith = <T>(fn: Fn<T, unknown>) =>
	(input: T): boolean => isNotNull(fn(input));
