import type {Fn} from '@datakit/types';

/**
 * Return a function expecting a pair and returning a {key, value} object
 * using the provided `fn` to get the `value`.
 *
 * @example
 * > objectifySelfSum = pairToKeyValueObjectWith(x => x + x)
 *
 * > objectifySelfSum('')
 * {key: undefined, value: undefined}
 * > objectifySelfSum('a')
 * {key: 'a', value: undefined}
 * > objectifySelfSum('ab')
 * {key: 'a', value: 'bb'}
 * > objectifySelfSum('abc')
 * {key: 'a', value: 'bb'}
 *
 *
 * > objectifyGetA = pairToKeyValueObjectWith(_.getKey('a'))
 *
 * > objectifyGetA([])
 * {key: undefined, value: undefined}
 * > objectifyGetA([1])
 * {key: 1, value: undefined}
 * > objectifyGetA([1, {a: 2}])
 * {key: 1, value: 2}
 * > objectifyGetA([1, {a: 2}, 3])
 * {key: 1, value: 2}
 *
 * > function func () {
 * 	return objectifyGetA(arguments);
 * }
 * > func()
 * {key: undefined, value: undefined}
 * > func(1)
 * {key: 1, value: undefined}
 * > func(1, {a: 2})
 * {key: 1, value: 2}
 * > func(1, {a: 2}, 3)
 * {key: 1, value: 2}
 *
 * @since 0.1.0
 */
export const pairToKeyValueObjectWith =
	<V, R>(fn: Fn<V, R>) =>
	(pair: ArrayLike<unknown>): {key: unknown; value: R | undefined} => {
		const key = pair[0];
		const item = pair[1] as V | undefined;
		return {
			key,
			value: item != null ? fn(item) : undefined,
		};
	};
