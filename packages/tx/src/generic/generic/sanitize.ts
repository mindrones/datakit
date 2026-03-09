import * as _ from 'lamb';

/**
 * Return a copy of the input after stringifying and parsing it.
 * Useful to strip `undefined` values for JSON comparison.
 *
 * @example
 * > sanitize({a: 1, b: undefined})
 * {a: 1}
 * > sanitize([1, undefined])
 * [1, null]
 *
 * @since 0.1.0
 */
// export const sanitize = (x: unknown): unknown => JSON.parse(JSON.stringify(x));
export const sanitize= _.pipe<unknown, unknown>([
	JSON.stringify,
	JSON.parse
]);
