import {describe, it, expect} from 'vitest';

import {keyValueArrayAverage} from './keyValueArrayAverage';

describe('keyValueArrayAverage', () => {
	it('should return the average of values of a {key, value}[] array', () => {
		expect(keyValueArrayAverage([
			{key: 'a', value: 1},
			{key: 'b', value: 23},
			{key: 'c', value: 6},
		])).toEqual(10);
	});
	it('should return zero when passed an empty array', () => {
		expect(keyValueArrayAverage([])).toEqual(0);
	});
});
