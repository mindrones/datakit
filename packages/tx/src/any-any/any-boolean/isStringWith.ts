import type {Fn} from '@datakit/types';

import {isString} from '../../generic/boolean/isString';

/**
 * Return a function returning true if the accessed value is a string
 *
 * @example
 * > isStringWith(getValue)({key: 'a', value: 'a'})
 * true
 * > isStringWith(getValue)({key: 'a', value: 1})
 * false
 *
 * @since 0.1.0
 */
export const isStringWith = <T>(fn: Fn<T, unknown>) =>
	(input: T): boolean => isString(fn(input));
