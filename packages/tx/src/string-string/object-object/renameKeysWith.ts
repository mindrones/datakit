import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function expecting an object and returning a new object with keys
 * renamed with the provided function.
 *
 * @example
 * > const rename = renameKeysWith(key => `--${key}`)
 * > rename({foo: 1, bar: 2})
 * {'--foo': 1, '--bar': 2}
 *
 * @see https://ascartabelli.github.io/lamb/module-lamb.html#renameWith
 * @since 0.1.0
 */
export const renameKeysWith = <T>(renameFn: Fn<string, string>) =>
	_.pipe<Obj<T>, Obj<T>>([
		_.pairs,
		_.mapWith(([key, value]) => [renameFn(key), value]),
		_.fromPairs
	]);
