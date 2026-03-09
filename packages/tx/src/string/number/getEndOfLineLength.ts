import type {Fn} from '@datakit/types';

/**
 * Return the length of the end of line, if any.
 *
 * @example
 * > getEndOfLineLength('hello')
 * 0
 * > getEndOfLineLength('hello\n')
 * 1
 * > getEndOfLineLength('hello\r\n')
 * 2
 *
 * @since 0.1.0
 */
export const getEndOfLineLength: Fn<string, number> = string =>
	(/\r\n$/u).test(string)
		? 2
		: (/\n$/u).test(string)
			? 1
			: 0;
