import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {makeAverageWith} from './makeAverageWith';

describe('makeAverageWith', () => {
	const makeAverageOfA = makeAverageWith(_.getKey('a'));

	it('should return a function expecting an array and returning the average of values obtained by the accessor', () => {
		expect(makeAverageOfA([{a: 1, b: 2}, {a: 10, b: 7}, {a: 7, b: 9}])).toEqual(6);
		expect(makeAverageOfA([{a: 11, b: 4}, {a: 7, b: 9}, {a: 9, b: 0}])).toEqual(9);
	});
	it('should return zero when passed an empty array', () => {
		expect(makeAverageOfA([])).toEqual(0);
	});
});
