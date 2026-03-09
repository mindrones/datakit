import * as _ from 'lamb';

import type {Fn} from '@datakit/types';

/**
 * Return a function returning true if the accessed value is null or undefined
 *
 * @example
 * > isNilWith(getValue)({key: 'a', value: null})
 * true
 * > isNilWith(getValue)({key: 'a'})
 * true
 *
 * @since 0.1.0
 */
export const isNilWith = <T>(fn: Fn<T, unknown>) =>
	(input: T): boolean => _.isNil(fn(input));
