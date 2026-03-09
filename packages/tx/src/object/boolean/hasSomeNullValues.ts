import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return true if some of the provided object properties are `null`.
 *
 * @example
 * > hasSomeNullValues({a: 1})
 * false
 * > hasSomeNullValues({a: 1, b: undefined})
 * false
 * > hasSomeNullValues({a: 1, b: undefined, c: null})
 * true
 *
 * @since 0.1.0
 */
export const hasSomeNullValues = _.pipe<Obj<unknown>, boolean>([
	_.values,
	_.some(_.isNull)
]);
