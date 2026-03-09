import {describe, it, expect} from 'vitest';

import {makeKeyed} from './makeKeyed';

describe('makeKeyed', () => {
	it('should return a function expecting an array of keys and returning an object with the provided value as value of those keys', () => {
		const makeKeyedEmptyArray = makeKeyed([]);

		expect(makeKeyedEmptyArray([1, 2])).toEqual({1: [], 2: []});
		expect(makeKeyedEmptyArray(['a', 'b'])).toEqual({a: [], b: []});
	});
});
