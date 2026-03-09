import type {Predicate} from '@datakit/types';

/**
 * Return a function expecting a search string and checking if the provided base string starts with the search string.
 *
 * @example
 * > stringStartsWith = makeStringStartsWith('Hi!')
 * > stringStartsWith('H')
 * true
 * > stringStartsWith('h')
 * false
 *
 * @since 0.1.0
 */
export const makeStringStartsWith = (baseStr: string): Predicate<string> =>
	searchStr => baseStr.startsWith(searchStr);
