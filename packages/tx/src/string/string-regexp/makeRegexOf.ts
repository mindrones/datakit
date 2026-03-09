import type {Fn} from '@datakit/types';

/**
 * Creates a regular expression using the flags provided
 *
 * @example
 * > const regex = makeRegexOf('giu')('foo+bar')
 * /foo+bar/giu
 *
 * @since 0.1.0
 */
export const makeRegexOf = (flags: string): Fn<string, RegExp> =>
	str => new RegExp(str, flags);
