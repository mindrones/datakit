import * as _ from 'lamb';

import type {Pair, Predicate} from '@datakit/types';

/**
 * Return a function expecting a number and returning true if the number
 * is within the provided range (inclusive on both ends).
 *
 * @example
 * > isWithinRange = makeIsWithinRange([0, 5])
 * > isWithinRange(2)
 * true
 * > isWithinRange(5)
 * true
 * > isWithinRange(8)
 * false
 *
 * @since 0.1.0
 */
export const makeIsWithinRange = (range: Pair<number>): Predicate<number> =>
	_.allOf([
		_.isGTE(range[0]),
		_.isLTE(range[1])
	]);
