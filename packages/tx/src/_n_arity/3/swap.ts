import * as _ from 'lamb';

/**
 * Return a copy of the array with values at the provided indices swapped
 *
 * @example
 * > swap([0, 1, 2, 3, 4, 5], 1, 4)
 * [0, 4, 2, 3, 1, 5]
 *
 * @since 0.1.0
 */
export const swap = <T>(array: T[], indexA: number, indexB: number): T[] =>
	_.reduce(
		array,
		(acc: T[], item: T, index: number, _array: T[]) => {
			if (index === indexA) {
				acc.push(_array[indexB]);
			} else if (index === indexB) {
				acc.push(_array[indexA]);
			} else {
				acc.push(item);
			}
			return acc;
		},
		[]
	);
