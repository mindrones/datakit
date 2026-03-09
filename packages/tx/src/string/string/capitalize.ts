import type {Fn} from '@datakit/types';

/**
 * Capitalise the input string
 *
 * @example
 * > capitalize('hello')
 * 'Hello'
 *
 * @since 0.1.0
 */
export const capitalize: Fn<string, string> =
	s => s.charAt(0).toUpperCase() + s.slice(1);
