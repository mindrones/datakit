import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

import {areSomeTruthy} from '../../array/boolean/areSomeTruthy';

/**
 * Return `true` if at least one value of the provided object is truthy.
 *
 * @example
 * > areSomeValuesTruthy({a: 0, b: 1, c: false})
 * true
 * > areSomeValuesTruthy({a: 0, b: false, c: null})
 * false
 */
export const areSomeValuesTruthy = _.pipe<Obj<any>, boolean>([
	_.values,
	areSomeTruthy,
]);
