import type {Maybe} from '@datakit/types';

type Iterable = string | unknown[];

/**
 * Return the shorter iterable of the provided array of iterables.
 * Returns the first one in case of equal length.
 * Returns undefined for an empty input.
 *
 * @example
 * > getShorter([[1, 2], [1], [1, 2, 3], ['a']])
 * [1]
 * > getShorter(['abc', 'a', [1]])
 * 'a'
 * > getShorter(['b', 'a'])
 * 'b'
 * > getShorter([])
 * undefined
 *
 * @since 0.1.0
 */
export const getShorter = (iterable: Iterable[]): Maybe<Iterable> => {
	let result: Maybe<Iterable>;

	if (iterable.length > 0) {
		let i = 0;
		[result] = iterable;

		if (result.length > 0) {
			while (++i <= iterable.length - 1) {
				result = result.length <= iterable[i].length
					? result
					: iterable[i];

				if (result.length === 0) {
					break;
				}
			}
		}
	}

	return result;
};
