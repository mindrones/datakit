import type {Fn} from '@datakit/types';

import {isNumber} from '../../generic/boolean/isNumber';

/**
 * Return a function returning true if the accessed value is a number
 *
 * @example
 * > isNumberWith(getValue)({key: 'a', value: 1})
 * true
 * > isNumberWith(getValue)({key: 'a', value: 'a'})
 * false
 *
 * @since 0.1.0
 */
export const isNumberWith = <T>(fn: Fn<T, unknown>) =>
	(input: T): boolean => isNumber(fn(input));
