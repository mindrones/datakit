import type {Fn} from '@datakit/types';

/**
 * Return a function that appends the provided string to the input string
 *
 * @example
 * > postfixed = makePostfixed('---')
 * > postfixed('A')
 * 'A---'
 * > postfixed('B')
 * 'B---'
 *
 * @since 0.1.0
 */
export const makePostfixed = (postfix: string): Fn<string, string> =>
	str => str + postfix;
