import {describe, it, expect} from 'vitest';

import {makeKeyedEmptyArray} from './makeKeyedEmptyArray';

describe('makeKeyedEmptyArray', () => {
	it('should return an object with all keys set to empty arrays', () => {
		expect(makeKeyedEmptyArray(['a', 'b'])).toEqual({a: [], b: []});
	});
	it('should work with number keys', () => {
		expect(makeKeyedEmptyArray([1, 2])).toEqual({1: [], 2: []});
	});
	it('should return an empty object for empty array', () => {
		expect(makeKeyedEmptyArray([])).toEqual({});
	});
});
