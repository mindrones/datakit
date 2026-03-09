/**
 * Return true if the input string starts with the test string.
 *
 * @example
 * > startsWith('Ping', 'Pin')
 * true
 * > startsWith('Pong', 'Pin')
 * false
 *
 * @since 0.1.0
 */
export const startsWith = (str: string, searchStr: string): boolean =>
	str.startsWith(searchStr);
