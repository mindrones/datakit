import type {Predicate} from '@datakit/types';

/**
 * Return a function expecting a base string and checking if it starts with the provided search string.
 *
 * @example
 * > startsWithHash = makeStartsWith('#')
 * > startsWithHash('# this is a bash comment')
 * true
 * > startsWithHash('This is not')
 * false
 *
 * @since 0.1.0
 */
export const makeStartsWith = (searchStr: string): Predicate<string> =>
	baseStr => baseStr.startsWith(searchStr);
