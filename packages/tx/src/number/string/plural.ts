import type {Fn} from '@datakit/types';

/**
 * Return an empty string if the provided number is 1, otherwise return 's'.
 * Useful for building pluralized labels.
 *
 * @example
 * > plural(1)
 * ''
 * > plural(2)
 * 's'
 * > plural(0)
 * 's'
 * > plural(-1)
 * 's'
 */
export const plural: Fn<number, string> = n => (n === 1 ? '' : 's');
