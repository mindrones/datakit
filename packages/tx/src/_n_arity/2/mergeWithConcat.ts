import type {Obj} from '@datakit/types';

import {concat} from '../concat';
import {mergeWith} from '../mergeWith';

/**
 * Return the merge of two objects concatenating values of correspondent keys.
 *
 * @example
 * > obj1 = {a: [1, 2, 3], b: [4, 5, 6]}
 * > obj2 = {a: [1, 2, 3], b: [4, 5, 6]}
 * > mergeWithConcat(obj1, obj2)
 * {a: [1, 2, 3, 1, 2, 3], b: [4, 5, 6, 4, 5, 6]}
 *
 * @since 0.1.0
 */
export const mergeWithConcat:
(base: Obj<unknown[]>, obj: Obj<unknown[]>) => Obj<unknown[]> =
	mergeWith(concat);
