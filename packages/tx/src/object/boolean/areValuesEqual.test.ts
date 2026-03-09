import {describe, it, expect} from 'vitest';

import {areValuesEqual} from './areValuesEqual';

describe('areValuesEqual', () => {
	it('should return `true` if all values of the provided object are equal', () => {
		expect(areValuesEqual({a: 1, b: 1, c: 1})).toEqual(true);
		expect(areValuesEqual({a: [1, 2], b: [1, 2], c: [1, 2]})).toEqual(true);
	});
	it('should return `false` if some values of the provided object are different', () => {
		expect(areValuesEqual({a: 1, b: 2, c: 3})).toEqual(false);
		expect(areValuesEqual({a: [1, 2], b: [1, 3], c: [1, 2]})).toEqual(false);
	});
	it('should return `false` if the object has size 1', () => {
		expect(areValuesEqual({a: 1})).toEqual(false);
	});
	it('should return `false` if the object is empty', () => {
		expect(areValuesEqual({})).toEqual(false);
	});
});
