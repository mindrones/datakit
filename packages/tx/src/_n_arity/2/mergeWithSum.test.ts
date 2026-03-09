import {describe, it, expect} from 'vitest';

import {mergeWithSum} from './mergeWithSum';

describe('mergeWithSum', () => {
	it('should merge 2 objects by summing correspondent values', () => {
		expect(mergeWithSum({a: 1, b: 2}, {a: 10, c: 1})).toEqual({a: 11, b: 2, c: 1});
	});
	it('should merge 2 objects by summing correspondent values, one being empty', () => {
		expect(mergeWithSum({a: 1, b: 2}, {})).toEqual({a: 1, b: 2});
	});
});
