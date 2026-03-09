import * as _ from 'lamb';

import {arrayMax} from '../../array/number/arrayMax';

import type {Obj} from '@datakit/types';

/**
 * Return the max of the provided object values.
 *
 * @example
 * > valuesMax({a: -3, b: 2, c: 1})
 * 2
 *
 * @since 0.1.0
 */
export const valuesMax = _.pipe<Obj<number>, number>([
	_.values,
	arrayMax
]);
