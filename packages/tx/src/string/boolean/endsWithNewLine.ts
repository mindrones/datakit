import {makeEndsWith} from '../../string/string-boolean/makeEndsWith';

import type {Predicate} from '@datakit/types';

/**
 * Return true if the string ends with a newline
 *
 * @example
 * > endsWithNewLine('abc')
 * false
 * > endsWithNewLine('abc\n')
 * true
 * > endsWithNewLine('abc\r\n')
 * true
 *
 * @since 0.1.0
 */
export const endsWithNewLine: Predicate<string> = makeEndsWith('\n');
