import {describe, it, expect} from 'vitest';

import {swapKeyValue} from './swapKeyValue';

describe('swapKeyValue', () => {
	it('should return an object with swapped keys and values - no duplicate values', () => {
		expect(swapKeyValue({a: 1, b: 2, c: 'd'})).toEqual({1: 'a', 2: 'b', d: 'c'});
	});
	it('should return an object with swapped keys and values - with duplicate values', () => {
		expect(swapKeyValue({a: 1, b: 2, c: 'd', e: 1})).toEqual({2: 'b', d: 'c', 1: 'e'});
	});
});
