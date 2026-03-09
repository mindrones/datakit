import type {Fn} from '@datakit/types';
import * as _ from 'lamb';

/**
 * Return a function returning true if the accessed value is null
 *
 * @example
 * > isNullWith(getValue)({key: 'a', value: null})
 * true
 *
 * @since 0.1.0
 */
export const isNullWith = <T>(fn: Fn<T, unknown>) =>
	(input: T): boolean => _.isNull(fn(input));
