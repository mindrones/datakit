import * as _ from 'lamb';

import type {Fn} from '@datakit/types';

import {isArray} from '../../generic/boolean/isArray';

/**
 * Return a function returning true if the accessed value is an array
 *
 * @example
 * > isArrayWith(getValue)({key: 'a', value: [1, 2]})
 * true
 *
 * @since 0.1.0
 */
export const isArrayWith = <T>(fn: Fn<T, unknown>) =>
	_.pipe<T, boolean>([fn,	isArray]);
