import rescape from 'escape-string-regexp';

import type {Fn} from '@datakit/types';

/**
 * Creates an escaped regular expression using the flags provided to prevent
 * regexp injections from source strings
 *
 * @example
 * > regex = makeSafeRegexOf('giu')('foo+bar')
 * /foo\+bar/giu
 *
 * @since 0.1.0
 */
export const makeSafeRegexOf = (flags: string): Fn<string, RegExp> =>
	str => new RegExp(rescape(str), flags);
