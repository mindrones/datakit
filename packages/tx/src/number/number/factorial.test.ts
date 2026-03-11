import {describe, it, expect} from 'vitest';

import {factorial} from './factorial';

describe('factorial', () => {
	it('should return 1 for 0', () => {
		expect(factorial(0)).toBe(1);
	});
	it('should return 1 for 1', () => {
		expect(factorial(1)).toBe(1);
	});
	it('should return 120 for 5', () => {
		expect(factorial(5)).toBe(120);
	});
	it('should return 720 for 6', () => {
		expect(factorial(6)).toBe(720);
	});
	it('should throw for negative numbers', () => {
		expect(() => factorial(-1)).toThrow();
	});
});
