import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

import {isNot} from '../../generic/any-boolean/isNot';

/**
 * Return a predicate expecting an object and returning `true` if the value
 * at the provided `key` is not the same as the provided `value`.
 *
 * @example
 * > isNotUSA = isNotKeyValue(['country_id', 'US'])
 * > isNotUSA({country_id: 'GB', id: 123})
 * true
 * > isNotUSA({country_id: 'US', id: 456})
 * false
 *
 * @since 0.1.0
 */
export const isNotKeyValue = ([key, value]: [string, unknown]) =>
	_.pipe<Obj<unknown>, boolean>([
		_.getKey(key),
		isNot(value)
	]);
