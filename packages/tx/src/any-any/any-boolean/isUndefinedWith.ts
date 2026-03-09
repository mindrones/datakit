import type {Fn} from '@datakit/types';
import * as _ from 'lamb';

/**
 * Return a function returning true if the accessed value is undefined
 *
 * @example
 * > isUndefinedWith(getValue)({key: 'a', value: 'a'})
 * false
 * > isUndefinedWith(getValue)({key: 'a', value: 1})
 * false
 *
 * @since 0.1.0
 */
export const isUndefinedWith = <T>(fn: Fn<T, unknown>) =>
	(input: T): boolean => _.isUndefined(fn(input));
