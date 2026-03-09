import {makeSplitBy} from '../../string/string-array/makeSplitBy';

import type {Fn} from '@datakit/types';

/**
 * Return an array by splitting by '\n'
 *
 * @example
 * > splitByEOL('a\nb\nc')
 * ['a', 'b', 'c']
 *
 * @since 0.1.0
 */
export const splitByEOL: Fn<string, string[]> = makeSplitBy('\n');
