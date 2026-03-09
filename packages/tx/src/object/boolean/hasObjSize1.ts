import * as _ from 'lamb';

import {is1} from '../../number/boolean/is1';
import {getObjSize} from '../number/getObjSize';

import type {Obj} from '@datakit/types';

/**
 * Return `true` if the provided object has exactly one key.
 *
 * @example
 * > hasObjSize1({})
 * false
 * > hasObjSize1({a: 1})
 * true
 * > hasObjSize1({a: 1, b: 2})
 * false
 *
 * @since 0.1.0
 */
export const hasObjSize1 = _.pipe<Obj<unknown>, boolean>([
	getObjSize,
	is1
]);
