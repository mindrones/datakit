import * as _ from 'lamb';

import {mergeWith} from '../mergeWith';

import type {Obj} from '@datakit/types';

/**
 * Return the merge of two objects merging values of correspondent keys.
 *
 * @example
 * > obj1 = {A: {a: 1}, B: {b: 1}}
 * > obj2 = {A: {b: 10}, B: {a: 10}}
 * > mergeWithMerge(obj1, obj2)
 * {A: {a: 1, b: 10}, B: {a: 10, b: 1}}
 *
 * @since 0.1.0
 */
export const mergeWithMerge:
	(base: Obj<Obj<unknown>>, obj: Obj<Obj<unknown>>) => Obj<Obj<unknown>> =
	mergeWith(_.merge);
