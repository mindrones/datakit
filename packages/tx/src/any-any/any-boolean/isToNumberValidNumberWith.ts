import type {Fn} from '@datakit/types';

import {toNumberisValidNumber} from '../../generic/boolean/toNumberisValidNumber';

/**
 * Return a function returning true if the accessed value can be turned into a valid number via Number()
 *
 * @example
 * > isToNumberValidNumberWith(getValue)({key: 'a', value: '123'})
 * true
 * > isToNumberValidNumberWith(getValue)({key: 'a', value: '123px'})
 * false
 *
 * @since 0.1.0
 */
export const isToNumberValidNumberWith = <T>(fn: Fn<T, unknown>) =>
	(input: T): boolean => toNumberisValidNumber(fn(input));
