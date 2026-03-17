import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

import {areAllTruthy} from '../../array/boolean/areAllTruthy';

/**
 * Return `true` if all values of the provided object are truthy.
 *
 * @example
 * > areAllValuesTruthy({a: 1, b: 'hello', c: true})
 * true
 * > areAllValuesTruthy({a: 1, b: 0, c: true})
 * false
 *
 * @since 0.3.0
 */
export const areAllValuesTruthy = _.pipe<Obj<any>, boolean>([
	_.values,
	areAllTruthy,
]);
