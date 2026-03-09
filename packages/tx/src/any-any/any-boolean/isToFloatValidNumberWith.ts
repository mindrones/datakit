import type {Fn} from '@datakit/types';

import {toFloatIsValidNumber} from '../../generic/boolean/toFloatIsValidNumber';

/**
 * Return a function returning true if the accessed value can be turned into a valid number via parseFloat()
 *
 * @example
 * > isToFloatValidNumberWith(getValue)({key: 'a', value: [1]})
 * true
 * > isToFloatValidNumberWith(getValue)({key: 'a', value: []})
 * false
 *
 * @since 0.1.0
 */
export const isToFloatValidNumberWith = <T>(fn: Fn<T, unknown>) =>
	(input: T): boolean => toFloatIsValidNumber(fn(input));
