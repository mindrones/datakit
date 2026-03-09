import type {Fn} from '@datakit/types';

import {isNotNil} from '../../generic/boolean/isNotNil';

/**
 * Return a function returning true if the accessed value is not null or undefined
 *
 * @example
 * > isNotNilWith(getValue)({key: 'a', value: 1})
 * true
 *
 * @since 0.1.0
 */
export const isNotNilWith = <T>(fn: Fn<T, unknown>) =>
	(input: T): boolean => isNotNil(fn(input));
