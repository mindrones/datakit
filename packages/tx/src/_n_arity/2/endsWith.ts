/**
 * Return true if the input string ends with the test string.
 *
 * @example
 * > endsWith('Ping', 'ing')
 * true
 * > endsWith('Pong', 'ing')
 * false
 *
 * @since 0.1.0
 */
export const endsWith = (str: string, searchStr: string): boolean =>
	str.endsWith(searchStr);
