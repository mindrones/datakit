import type {Obj} from '@datakit/types';

/**
 * Return a predicate expecting an object and returning `true` if the value
 * at the provided `key` is the same as the provided `value`.
 *
 * @example
 * > isUSA = isKeyValue(['country_id', 'US'])
 * > isUSA({country_id: 'GB', id: 123})
 * false
 * > isUSA({country_id: 'US', id: 456})
 * true
 *
 * @since 0.1.0
 */
export const isKeyValue = ([key, value]: [string, unknown]) =>
	(obj: Obj<unknown>): boolean => Object.is(obj[key], value);
