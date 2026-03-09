import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return a copy of the provided array of objects assigning each object index
 * to a property with the provided key (defaulting to `index`)
 *
 * @example
 * > setIndexAsKey()([{a: 2}, {c: 5}])
 * [{a: 2, index: 0}, {c: 5, index: 1}]
 * > setIndexAsKey('idx')([{a: 2}, {c: 5}])
 * [{a: 2, idx: 0}, {c: 5, idx: 1}]
 *
 * @since 0.1.0
 */
export const setIndexAsKey = (key = 'index') =>
	_.pipe<Obj<unknown>[], Obj<unknown>[]>([
		_.zipWithIndex,
		_.mapWith(([obj, index]) => _.setIn(obj, key, index))
	]);
