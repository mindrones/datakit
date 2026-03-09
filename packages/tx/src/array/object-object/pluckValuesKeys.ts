import * as _ from 'lamb';

/**
 * Return a function plucking the provided keys from the expected object values.
 *
 * @example
 * > let select = pluckValuesKeys(['a', 'k'])
 * > select({
 *     foo: {a: 1, b: 2, c: 3, k: 4},
 *     bar: {a: 5, b: 8}
 *   })
 * {foo: {a: 1, k: 4}, bar: {a: 5}}
 *
 * @since 0.1.0
 */
export const pluckValuesKeys = (keys: string[]) =>
	_.mapValuesWith(_.pick(keys));
