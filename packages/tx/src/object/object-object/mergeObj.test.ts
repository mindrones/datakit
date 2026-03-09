import {describe, it, expect} from 'vitest';

import {mergeObj} from './mergeObj';

describe('mergeObj', () => {
	it('should return a function expecting an object to merge with the input object', () => {
		const mergeB = mergeObj({b: 2});

		expect(mergeB({a: 1})).toEqual({a: 1, b: 2});
		expect(mergeB({a: 1, b: 1})).toEqual({a: 1, b: 2});
	});
});
