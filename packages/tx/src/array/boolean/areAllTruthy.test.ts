import {describe, it, expect} from 'vitest';

import {areAllTruthy} from './areAllTruthy';

describe('areAllTruthy', () => {
	it('should return true for all-boolean truthy array', () => {
		expect(areAllTruthy([true, true])).toEqual(true);
	});
	it('should return true for mixed truthy types', () => {
		expect(areAllTruthy([1, [], [1, 2], {}, {a: 1}, 'a'])).toEqual(true);
	});
	it('should return false when a boolean false is present', () => {
		expect(areAllTruthy([false, true])).toEqual(false);
	});
	it('should return false for falsy non-boolean values (0, -0, empty string)', () => {
		expect(areAllTruthy([0, {a: 1}])).toEqual(false);
		expect(areAllTruthy([-0, {a: 1}])).toEqual(false);
		expect(areAllTruthy(['', {a: 1}])).toEqual(false);
	});
});
