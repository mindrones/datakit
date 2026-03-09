import * as _ from 'lamb';

import {isFunction} from './isFunction';
import {isNotNil} from './isNotNil';

import type {Predicate} from '@datakit/types';

/**
 * Return true if the input is a promise.
 *
 * @since 0.1.0
 */
export const isPromise: Predicate<unknown> = _.allOf([
	isNotNil,
	obj => obj.then && isFunction(obj.then)
]);
