import {makeSplitBy} from '../../string/string-array/makeSplitBy';

import type {Fn} from '@datakit/types';

/**
 * Return an array by splitting by ';'
 *
 * @example
 * > splitBySemiColon('A;B;C')
 * ['A', 'B', 'C']
 *
 * @since 0.1.0
 */
export const splitBySemiColon: Fn<string, string[]> = makeSplitBy(';');
