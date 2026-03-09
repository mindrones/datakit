import * as _ from 'lamb';

import {trim} from '../string/trim';

/**
 * Return a function that splits the expected string and trims all the elements
 * of the returned array
 *
 * @example
 * > trimSplitByDoubleDot = makeTrimmedSplitBy('..')
 * > trimSplitByDoubleDot('  aa ..	a\n..a')
 * ['aa', 'a', 'a']
 *
 * @since 0.1.0
 */
export const makeTrimmedSplitBy = (separator: string | RegExp) =>
	_.pipe<string, string[]>([
		trim,
		_.splitBy(separator),
		_.mapWith(trim)
	]);
