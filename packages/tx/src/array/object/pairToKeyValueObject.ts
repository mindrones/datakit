/**
 * Return the {key, value} object from a pair
 *
 * @example
 * > pairToKeyValueObject(['a', 2])
 * {key: 'a', value: 2}
 * > pairToKeyValueObject([1, 2, 3])
 * {key: 1, value: 2}
 * > pairToKeyValueObject([])
 * {key: undefined, value: undefined}
 *
 * @since 0.1.0
 */
export const pairToKeyValueObject =
	<K, V>([key, value]: [K?, V?, ...unknown[]]) => ({key, value})
