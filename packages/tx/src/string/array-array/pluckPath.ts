import * as _ from 'lamb';
import {Fn} from '@datakit/types';

/**
 * Return a function expecting an array of objects and plucking the provided array
 * with the input path
 *
 * @see https://ascartabelli.github.io/lamb/module-lamb.html#pluck
 *
 * @example
 * > getABs = pluckPath('a.b')
 * > getABs([{a: {b: -1, label: 'foo'}}, {a: {b: 4, label: 'bar'}}])
 * [-1, 4]
 * > getABs([{a: {label: 'foo'}}, {a: {b: 2}}])
 * [undefined, 2]
 *
 * @since 0.1.0
 */
export const pluckPath = (path: string): Fn<object[], unknown[]> =>
	_.mapWith(_.getPath(path));
