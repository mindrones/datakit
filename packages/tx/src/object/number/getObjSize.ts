import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

import {getLength} from '../../iterable/number/getLength';

/**
 * Return the size of the provided object.
 *
 * @example
 * > getObjSize({a: 1, b: 2})
 * 2
 *
 * @since 0.1.0
 */
export const getObjSize = _.pipe<Obj<unknown>, number>([
	_.keys,
	getLength
]);
