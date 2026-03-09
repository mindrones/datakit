import rescape from 'escape-string-regexp';

import type {Fn} from '@datakit/types';

/**
 * Return a safe regular expression based on the given string,
 * with any special characters escaped
 *
 * @example
 * > safeRegexOf('foo+bar')
 * /foo\+bar/giu
 *
 * @since 0.1.0
 */
export const safeRegexOf: Fn<string, RegExp> =
	string => new RegExp(rescape(string), 'giu');
