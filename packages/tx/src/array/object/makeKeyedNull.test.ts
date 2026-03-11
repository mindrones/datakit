import {describe, it, expect} from 'vitest';

import {makeKeyedNull} from './makeKeyedNull';

describe('makeKeyedNull', () => {
	it('should return an object with all keys set to null', () => {
		expect(makeKeyedNull(['a', 'b'])).toEqual({a: null, b: null});
	});
	it('should work with number keys', () => {
		expect(makeKeyedNull([1, 2])).toEqual({1: null, 2: null});
	});
	it('should return an empty object for empty array', () => {
		expect(makeKeyedNull([])).toEqual({});
	});
});
