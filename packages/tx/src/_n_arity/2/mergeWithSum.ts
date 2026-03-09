import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

import {mergeWith} from '../mergeWith';

/**
 * Return the merge of two objects adding values of correspondent keys.
 *
 * @example
 * > mergeWithSum({a: 1, b: 2}, {a: 10, c: 1})
 * {a: 11, b: 2, c: 1}
 *
 * @since 0.1.0
 */
export const mergeWithSum:
	(base: Obj<number>, obj: Obj<number>) => Obj<number> =
	mergeWith(_.sum);
