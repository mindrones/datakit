import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

import {arrayMin} from '../../array/number/arrayMin';

/**
 * Return the min of the provided object values.
 *
 * @example
 * > valuesMin({a: -3, b: 2, c: 1})
 * -3
 *
 * @since 0.1.0
 */
export const valuesMin = _.pipe<Obj<number>, number>([
	_.values,
	arrayMin
]);
