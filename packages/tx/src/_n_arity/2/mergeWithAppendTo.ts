import * as _ from 'lamb';

import {mergeWith} from '../mergeWith';

import type {Obj} from '@datakit/types';

/**
 * Return the merge of two objects appending values of correspondent keys.
 *
 * @example
 * > obj1 = {a: [1, 2, 3], b: [4, 5, 6]}
 * > obj2 = {a: 4, b: [7]}
 * > mergeWithAppendTo(obj1, obj2)
 * {a: [1, 2, 3, 4], b: [4, 5, 6, [7]]}
 *
 * @since 0.1.0
 */
export const mergeWithAppendTo:
(base: Obj<unknown[]>, obj: Obj<unknown>) => Obj<unknown[]> =
	mergeWith(_.appendTo as any) as any;
