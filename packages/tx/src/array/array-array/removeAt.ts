import type {Fn} from '@datakit/types';

type Acc<T> = {cursor: number; result: T[]};
/**
 * Return a function expecting an array and removing items at the provided indices.
 *
 * @example
 * > removeIndices = removeAt([3, 4, 8])
 * > removeIndices([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
 * [0, 1, 2, 5, 6, 7, 9]
 *
 * @since 0.1.0
 */
export const removeAt = <T>(indices: number[]): Fn<T[], T[]> => {
	const sortedIndices = [...indices].sort((a, b) => a - b);
	return array => array.reduce<Acc<T>>(
		(acc, item, i) => {
			if (i === sortedIndices[acc.cursor]) {
				acc.cursor++;
			} else {
				acc.result.push(item);
			}
			return acc;
		},
		{cursor: 0, result: []}
	).result;
};
