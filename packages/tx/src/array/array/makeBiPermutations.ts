import * as _ from 'lamb';

/**
 * Return the permutations of pairs of the provided items.
 *
 * @example
 * > makeBiPermutations([{foo: 'a'}, {foo: 'b'}, {bar: 'c'}])
 * [[{foo: 'a'}, {foo: 'b'}], [{foo: 'a'}, {bar: 'c'}], [{foo: 'b'}, {bar: 'c'}]]
 *
 * @since 0.1.0
 */
export const makeBiPermutations = <T>(items: T[]): [T, T][] =>
	items.reduce(
		(acc: [T, T][], item: T, index: number, array: T[]) => {
			for (let cursor = index + 1; cursor < array.length; cursor++) {
				acc.push([item, array[cursor]]);
			}
			return acc;
		},
		[]
	);
