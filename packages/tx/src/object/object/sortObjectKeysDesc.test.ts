import {describe, it, expect} from 'vitest';

import {sortObjectKeysDesc} from './sortObjectKeysDesc';

describe('sortObjectKeysDesc', () => {
	it('should return a copy of the input object with enumerable properties sorted in descending order', () => {
		expect(sortObjectKeysDesc({c: 1, a: 2, b: 15})).toEqual({c: 1, b: 15, a: 2});
	});
});
