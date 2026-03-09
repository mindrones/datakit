import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {arraySumWith} from './arraySumWith';

describe('arraySumWith', () => {
	const sumValues = arraySumWith(_.getKey('a'));

	it('should return a function expecting an array and summing the numbers obtained from applying the provided accessor to the array items', () => {
		expect(sumValues([{a: 1}, {a: 2}, {a: 3}])).toEqual(6);
	});
	it('should return zero when passed an empty array', () => {
		expect(sumValues([])).toEqual(0);
	});
});
