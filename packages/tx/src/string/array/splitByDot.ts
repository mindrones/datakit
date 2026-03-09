import {makeSplitBy} from '../../string/string-array/makeSplitBy';

import type {Fn} from '@datakit/types';

/**
 * Return an array by splitting by '.'
 *
 * @example
 * > splitByDot('a.b.c')
 * ['a', 'b', 'c']
 *
 * @since 0.1.0
 */
export const splitByDot: Fn<string, string[]> = makeSplitBy('.');
