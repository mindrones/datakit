import {describe, it, expect} from 'vitest';

import {areAllValuesTruthy} from './areAllValuesTruthy';

describe('areAllValuesTruthy', () => {
	it('should return true when all values are truthy', () => {
		expect(areAllValuesTruthy({a: 1, b: 'hello', c: true})).toBe(true);
	});
	it('should return false when any value is falsy', () => {
		expect(areAllValuesTruthy({a: 1, b: 0, c: true})).toBe(false);
	});
	it('should return false for an object with a null value', () => {
		expect(areAllValuesTruthy({a: null})).toBe(false);
	});
	it('should return true for an empty object', () => {
		expect(areAllValuesTruthy({})).toBe(true);
	});
});
