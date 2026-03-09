import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

import {isNot} from '../../generic/any-boolean/isNot';

/**
 * Return a predicate expecting an object and returning `true` if the value
 * at the provided `path` is not the same as the provided `value`.
 *
 * @example
 * > isNotDefaultStatus = isNotPathValue(['item.status', 'default'])
 * > isNotDefaultStatus({item: {status: 'active'}, id: 123})
 * true
 * > isNotDefaultStatus({item: {status: 'default'}, id: 456})
 * false
 *
 * @since 0.1.0
 */
export const isNotPathValue = ([path, value]: [string, unknown]) =>
	_.pipe<Obj<unknown>, boolean>([
		_.getPath(path),
		isNot(value)
	]);
