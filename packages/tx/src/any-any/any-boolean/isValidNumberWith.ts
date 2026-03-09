import type {Fn} from '@datakit/types';

import {isValidNumber} from '../../generic/boolean/isValidNumber';

/**
 * Return a function returning true if the accessed value is a valid number
 *
 * @example
 * > isValidNumberWith(getValue)({key: 'a', value: 'a'})
 * false
 * > isValidNumberWith(getValue)({key: 'a', value: 1})
 * true
 *
 * @since 0.1.0
 */
export const isValidNumberWith = <T>(fn: Fn<T, unknown>) =>
	(input: T): boolean => isValidNumber(fn(input));
