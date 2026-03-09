import * as _ from 'lamb';

import {areEqual} from '../../array/boolean/areEqual';

import type {Obj} from '@datakit/types';

/**
 * Return `true` if all values of the provided object are equal.
 *
 * @example
 * > areValuesEqual({a: 1, b: 1, c: 1})
 * true
 * > areValuesEqual({a: [1, 2], b: [1, 2], c: [1, 2]})
 * true
 * > areValuesEqual({a: 1, b: 2, c: 3})
 * false
 * > areValuesEqual({})
 * false
 *
 * @since 0.1.0
 */
export const areValuesEqual = _.pipe<Obj<any>, boolean>([_.values, areEqual]);
