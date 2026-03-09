import * as _ from 'lamb';

import {concat} from '../../_n_arity/concat';

import type {Obj} from '@datakit/types';

/**
 * Concatenate the values of the provided object.
 *
 * @example
 * > concatValues({a: [1, 2, 3], b: [4, 5, 6]})
 * [1, 2, 3, 4, 5, 6]
 *
 * @since 0.1.0
 */
export const concatValues = _.pipe<Obj<any[]>, any[]>([
	_.values,
	_.apply(concat)
]);
