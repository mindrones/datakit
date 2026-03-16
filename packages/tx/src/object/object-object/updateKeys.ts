import type {Fn, Obj} from '@datakit/types';

/**
 * Return a function that expects an object and applies the provided updater
 * function to the values correspondent to the provided keys, leaving the other
 * properties unchanged.
 *
 * @example
 * > update = updateKeys({keys: ['a', 'k', 'm'], updater: x => x * 2})
 * > update({a: 1, b: 2, d: 4, k: 7, m: 2})
 * {a: 2, b: 2, d: 4, k: 14, m: 4}
 * > update({a: 1, b: 2, d: 4})
 * {a: 2, b: 2, d: 4}
 * > update({b: 2, d: 4})
 * {b: 2, d: 4}
 *
 * @since 0.1.0
 */
export const updateKeys =
	<V>({keys, updater}: {keys: string[]; updater: Fn<V, V>}) =>
		(obj: Obj<V>): Obj<V> =>
			keys.reduce(
				(acc, key) => {
					if (key in acc) {
						acc[key] = updater(acc[key]);
					}

					return acc;
				},
				{...obj}
			);
