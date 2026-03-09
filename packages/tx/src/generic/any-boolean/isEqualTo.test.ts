import {describe, it, expect} from 'vitest';

import {isEqualTo} from './isEqualTo';

describe('isEqualTo', () => {
	it('should return a function that returns true if the input value is equal to the provided value – object', () => {
		const obj1 = {a: 1, b: [1, 2]};
		const obj1Copy = {a: 1, b: [1, 2]};
		const obj2 = {a: 1, b: [1, 2, 3]};
		const isEqualToObj = isEqualTo(obj1);

		expect(isEqualToObj(obj1Copy)).toEqual(true);
		expect(isEqualToObj(obj2)).toEqual(false);
	});
	it('should return a function that returns true if the input value is equal to the provided value – array', () => {
		const arr1 = [1, 2, {a: 1}];
		const arr1Copy = [1, 2, {a: 1}];
		const arr2 = [1, 2, {a: 1}, 3];
		const isEqualToArray = isEqualTo(arr1);

		expect(isEqualToArray(arr1Copy)).toEqual(true);
		expect(isEqualToArray(arr2)).toEqual(false);
	});
});
