import type {Fn, Pair} from '@datakit/types';

import {factorial} from '../../number/number/factorial';

/**
 * Calculate the number of combinations (permutations without repetition) of `n` items
 * taken in groups of size `g`. Useful for sizing matrices of scatterplots / heatmaps.
 *
 * Formula: C(n,g) = n! / (g! × (n-g)!)
 *
 * @example
 * > permutationsCount([4, 2])
 * 6
 * > permutationsCount([5, 2])
 * 10
 *
 * @since 0.3.0
 */
export const permutationsCount: Fn<Pair<number>, number> =
	([itemCount, groupSize]) =>
		factorial(itemCount) /
		(factorial(groupSize) * factorial(itemCount - groupSize));
