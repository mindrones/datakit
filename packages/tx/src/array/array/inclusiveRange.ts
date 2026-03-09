import * as _ from 'lamb';

/**
 * Return the range within the provided limits, both limits being included.
 *
 * @example
 * > inclusiveRange([2, 5])
 * [2, 3, 4, 5]
 * > inclusiveRange([2, 12, 2])
 * [2, 4, 6, 8, 10, 12]
 * > inclusiveRange([])
 * []
 *
 * @since 0.1.0
 */
export const inclusiveRange = (
	[start, end, step = 1]: [number, number, number?] | []
): number[] => {
	if (start === undefined) {
		return [];
	}
	if (start === end) {
		return [start];
	}

	const range = _.range(start, end as number, step);

	return range.length === 0 || _.last(range) + step > (end as number)
		? range
		: _.appendTo(range, end as number);
};
