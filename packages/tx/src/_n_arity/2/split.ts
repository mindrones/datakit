/**
 * Return an array by splitting the input string with the provided separator.
 *
 * @example
 * > split('a-b-c', '-')
 * ['a', 'b', 'c']
 *
 * @since 0.1.0
 */
export const split = (str: string, separator: string | RegExp): string[] =>
	str.split(separator);
