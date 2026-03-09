import type {Fn} from '@datakit/types';

/**
 * Return a function that prepends the provided string to the input string
 *
 * @example
 * > prefixed = makePrefixed('---')
 * > prefixed('A')
 * '---A'
 * > prefixed('B')
 * '---B'
 *
 * @since 0.1.0
 */
export const makePrefixed = (prefix: string): Fn<string, string> =>
	str => prefix + str;
