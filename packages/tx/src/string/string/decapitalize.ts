import type {Fn} from '@datakit/types';

/**
 * Decapitalise the input string (makes the first letter lowercase)
 *
 * @example
 * > decapitalize('Hello')
 * 'hello'
 * > decapitalize('HELLO')
 * 'hELLO'
 *
 * @since 0.1.0
 */
export const decapitalize: Fn<string, string> =
	s => s.charAt(0).toLowerCase() + s.slice(1);
