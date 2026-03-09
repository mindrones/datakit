import type {Predicate} from '@datakit/types';

/**
 * Return a function expecting a base string and checking if it ends with the provided search string.
 *
 * @example
 * > endsWithExclamationMark = makeEndsWith('!')
 * > endsWithExclamationMark('Hi!')
 * true
 * > endsWithExclamationMark('Who?')
 * false
 *
 * @since 0.1.0
 */
export const makeEndsWith =
	(searchStr: string): Predicate<string> =>
		baseStr => baseStr.endsWith(searchStr);
