import * as _ from 'lamb';

import {pickIfTruthy} from '../object/pickIfTruthy';

import type {Obj} from '@datakit/types';

/**
 * Return the keys of the provided object with a truthy value.
 *
 * @example
 * > getTruthyValuesKeys({a: true, b: true, c: false})
 * ['a', 'b']
 * > getTruthyValuesKeys({a: 1, b: 0, c: false})
 * ['a']
 * > getTruthyValuesKeys({a: [1, 2], b: {a: 1}, c: false})
 * ['a', 'b']
 *
 * @since 0.1.0
 */
export const getTruthyValuesKeys = _.pipe<Obj<unknown>, string[]>([
	pickIfTruthy,
	_.keys
]);
