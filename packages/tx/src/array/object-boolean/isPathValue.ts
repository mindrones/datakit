import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return a predicate expecting an object and returning `true` if the value
 * at the provided `path` is the same as the provided `value`.
 *
 * @example
 * > isDefaultStatus = isPathValue(['item.status', 'default'])
 * > isDefaultStatus({item: {status: 'active'}, id: 123})
 * false
 * > isDefaultStatus({item: {status: 'default'}, id: 456})
 * true
 *
 * @since 0.1.0
 */
export const isPathValue = ([path, value]: [string, unknown]) =>
	_.pipe<Obj<unknown>, boolean>([
		_.getPath(path),
		_.is(value)
	]);
