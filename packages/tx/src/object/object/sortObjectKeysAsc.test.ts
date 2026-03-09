import {describe, it, expect} from 'vitest';

import {sortObjectKeysAsc} from './sortObjectKeysAsc';

describe('sortObjectKeysAsc', () => {
	it('should return a copy of the input object with enumerable properties sorted in ascending order', () => {
		expect(sortObjectKeysAsc({c: 1, a: 2, b: 15})).toEqual({a: 2, b: 15, c: 1});
	});
});
