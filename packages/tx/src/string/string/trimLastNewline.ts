import type {Fn} from '@datakit/types';

/**
 * Trim the last char of the provided string if it's a newline
 *
 * @example
 * > trimLastNewline('a\nb\nc')
 * 'a\nb\nc'
 * > trimLastNewline('a\nb\nc\n')
 * 'a\nb\nc'
 * > trimLastNewline('a\nb\nc\n\n')
 * 'a\nb\nc\n'
 * > trimLastNewline('a\nb\nc\r\n')
 * 'a\nb\nc'
 * > trimLastNewline('a\nb\nc\n\r\n')
 * 'a\nb\nc\n'
 *
 * @since 0.1.0
 */
export const trimLastNewline: Fn<string, string> = s => {
	if (/\r\n$/u.test(s)) return s.slice(0, -2);
	if (/\n$/u.test(s)) return s.slice(0, -1);
	return s;
};
