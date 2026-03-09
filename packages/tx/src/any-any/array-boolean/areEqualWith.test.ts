import {describe, it, expect} from 'vitest';

import {areEqualWith, getValue} from '@datakit/tx';

describe('areEqualWith', () => {
	const areEqualByValue = areEqualWith(getValue);

	it('should return a function returning `true` if all the items of an array are equal once processed with the provided `accessor`', () => {
		expect(
			areEqualByValue([
				{key: 'a', value: 1},
				{key: 'b', value: 1},
				{key: 'c', value: 1},
			])
		).toEqual(true);
		expect(
			areEqualByValue([
				{key: 'a', value: 1},
				{key: 'b', value: 2},
				{key: 'c', value: 3},
			])
		).toEqual(false);
	});
	it('should return a function returning `false` if the provided array has less than 2 items', () => {
		expect(
			areEqualByValue([
				{key: 'a', value: 1},
			])
		).toEqual(false);
		expect(areEqualByValue([])).toEqual(false);
	});
});
