import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function expecting an object and returning an object having keys
 * and values defined by applying the provided array of two functions to the
 * input object keys and values.
 *
 * @example
 * > remap = remapWith([key => `${key}${key}`, value => 3 * value])
 * > remap({a: 1, b: 2})
 * {aa: 3, bb: 6}
 *
 * @since 0.1.0
 */
export const remapWith =
	([keysFn, valuesFn]: [Fn<string, string>, Fn<any, any>]) =>
		_.pipe<Obj<any>, Obj<any>>([
			_.pairs,
			_.mapWith(([key, value]) => [keysFn(key), valuesFn(value)]),
			_.fromPairs,
		]);
