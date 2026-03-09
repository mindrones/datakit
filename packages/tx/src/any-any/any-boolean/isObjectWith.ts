import type {Fn} from '@datakit/types';

import {isObject} from '../../generic/boolean/isObject';

/**
 * Return a function returning true if the accessed value is an object
 *
 * @example
 * > isObjectWith(getValue)({key: 'a', value: {a: 1}})
 * true
 * > isObjectWith(getValue)({key: 'a', value: 'a'})
 * false
 *
 * @since 0.1.0
 */
export const isObjectWith = <T>(fn: Fn<T, unknown>) =>
	(input: T): boolean => isObject(fn(input));
