import * as _ from 'lamb';

import {isGT0} from '../../number/boolean/isGT0';
import {getObjSize} from '../number/getObjSize';

import type {Obj} from '@datakit/types';

/**
 * Return `true` if the object is not empty.
 *
 * @example
 * > isObjNotEmpty({a: 1})
 * true
 * > isObjNotEmpty({})
 * false
 *
 * @since 0.1.0
 */
export const isObjNotEmpty = _.pipe<Obj<unknown>, boolean>([
	getObjSize,
	isGT0
]);
