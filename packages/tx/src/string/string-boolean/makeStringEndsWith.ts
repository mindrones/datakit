import type {Predicate} from '@datakit/types';

/**
 * Return a function expecting a search string and checking if the provided base string ends with the search string.
 *
 * @example
 * > stringEndsWith = makeStringEndsWith('Hi!')
 * > stringEndsWith('!')
 * true
 * > stringEndsWith('?')
 * false
 *
 * @since 0.1.0
 */
export const makeStringEndsWith = (baseStr: string): Predicate<string> =>
	searchStr => baseStr.endsWith(searchStr);
