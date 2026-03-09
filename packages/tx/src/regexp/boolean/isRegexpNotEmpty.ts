import type {Predicate} from '@datakit/types';

/**
 * Returns true if the provided RegExp is not empty
 *
 * @example
 * > isRegexpNotEmpty(/^a/u)
 * true
 * > isRegexpNotEmpty(/(?:)/u)
 * false
 *
 * @since 0.1.0
 */
export const isRegexpNotEmpty: Predicate<RegExp> =
	regexp => regexp.source !== '(?:)';
