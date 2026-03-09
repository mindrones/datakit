import type {Predicate} from '@datakit/types';

/**
 * Returns true if the provided RegExp is empty
 *
 * @example
 * > isRegexpEmpty(/(?:)/u)
 * true
 * > isRegexpEmpty(/^a/u)
 * false
 *
 * @since 0.1.0
 */
export const isRegexpEmpty: Predicate<RegExp> =
	regexp => regexp.source === '(?:)';
