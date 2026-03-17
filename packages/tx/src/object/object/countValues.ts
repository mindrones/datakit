import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

/**
 * Return an object counting the occurrences of each unique value in the provided object.
 *
 * @example
 * > countValues({a: 'x', b: 'y', c: 'x', d: 'z', e: 'y'})
 * {x: 2, y: 2, z: 1}
 *
 * @since 0.3.0
 */
export const countValues = _.pipe<Obj<any>, Obj<number>>([
	_.values,
	_.countBy(_.identity),
]);
