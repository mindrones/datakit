import * as _ from 'lamb';

/**
 * Return a copy of the provided array sorted in descending order.
 *
 * @example
 * > sortDesc([3, 1, 2])
 * [3, 2, 1]
 *
 * @since 0.3.0
 */
export const sortDesc = _.sortWith<unknown>([_.sorterDesc(_.identity)]);
