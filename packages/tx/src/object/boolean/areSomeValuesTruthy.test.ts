import {describe, it, expect} from 'vitest';

import {areSomeValuesTruthy} from './areSomeValuesTruthy';

describe('areSomeValuesTruthy', () => {
	it('should return true when at least one value is truthy', () => {
		expect(areSomeValuesTruthy({a: 0, b: 1, c: false})).toBe(true);
	});
	it('should return false when all values are falsy', () => {
		expect(areSomeValuesTruthy({a: 0, b: false, c: null})).toBe(false);
	});
	it('should return false for an empty object', () => {
		expect(areSomeValuesTruthy({})).toBe(false);
	});
});
