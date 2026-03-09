import type {Fn} from '@datakit/types';

/**
 * Return a regular expression based on the given string
 *
 * @example
 * > regexOf('foo')
 * /foo/giu
 *
 * @since 0.1.0
 */
export const regexOf: Fn<string, RegExp> = string => new RegExp(string, 'giu');
