import * as _ from 'lamb';

import {is0} from '../../number/boolean/is0';
import {getObjSize} from '../number/getObjSize';

import type {Obj} from '@datakit/types';

/**
 * Return `true` if the object is empty.
 *
 * @example
 * > isObjEmpty({})
 * true
 * > isObjEmpty({a: 1})
 * false
 *
 * @since 0.1.0
 */
export const isObjEmpty = _.pipe<Obj<unknown>, boolean>([
	getObjSize,
	is0
]);
