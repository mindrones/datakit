import type {Fn, Pair} from '@datakit/types';

/**
 * Return a random number in the specified range.
 *
 * @example
 * > makeRandomNumInRange([1.2, 7.4])
 * 4.2
 *
 * @since 0.1.0
 */
export const makeRandomNumInRange: Fn<Pair<number>, number> =
	([min, max]) => min + (max - min) * Math.random();
