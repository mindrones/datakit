import {describe, it, expect} from 'vitest';

import {arrayAverage} from './arrayAverage';

describe('arrayAverage', () => {
	it('should return the average of the numbers in the provided array', () => {
		expect(arrayAverage([1, 23, 6])).toEqual(10);
	});
	it('should return zero when passed an empty array', () => {
		expect(arrayAverage([])).toEqual(0);
	});
});
