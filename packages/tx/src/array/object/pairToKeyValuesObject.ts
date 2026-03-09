/**
 * Return the {key, values} object from a pair
 *
 * @example
 * > pairToKeyValuesObject(['a', [1, 2]])
 * {key: 'a', values: [1, 2]}
 * > pairToKeyValuesObject([1, [1, 2], 3])
 * {key: 1, values: [1, 2]}
 *
 * @since 0.1.0
 */
export const pairToKeyValuesObject =
	<K, V>([key, values]: [K?, V[]?, ...unknown[]]) => ({key, values})
