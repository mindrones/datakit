/**
 * Return a function expecting a separator or regex to split the provided string
 *
 * @example
 * > splitStringBy = makeSplitStringBy('a.b-c,d:e')
 * > splitStringBy(':')
 * ['a.b-c,d', 'e']
 * > splitStringBy('-')
 * ['a.b', 'c,d:e']
 *
 * @since 0.1.0
 */
export const makeSplitStringBy = (str: string) =>
	(separator: string | RegExp): string[] =>
		str.split(separator);
