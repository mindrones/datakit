import {describe, expect, it} from 'vitest';

import {concat} from './concat';

describe('concat', () => {
	const arr1 = [0, 1, 2, 3, 4];
	const arr2 = [5, 6, 7, 8, 9];

	it('should concatenate 2 arrays', () => {
		expect(concat(arr1, arr2)).toEqual([...arr1, ...arr2]);
	});
	it('should concatenate 4 arrays', () => {
		expect(concat(arr1, arr2, arr1, arr2)).toEqual([...arr1, ...arr2, ...arr1, ...arr2]);
	});
	it('should concatenate empty arrays', () => {
		expect(concat([], [])).toEqual([]);
	});
	it('should concatenate an array and an empty array', () => {
		expect(concat(arr1, [])).toEqual(arr1);
	});
	it('should concatenate an empty array and an array', () => {
		expect(concat([], arr1)).toEqual(arr1);
	});
});
