import {describe, it, expect} from 'vitest';

import {objectToValueDescKeyAsc} from './objectToValueDescKeyAsc';

describe('objectToValueDescKeyAsc', () => {
	it('should convert object to key-value array sorted by value desc then key asc', () => {
		expect(objectToValueDescKeyAsc({b: 1, a: 3, c: 1})).toEqual([
			{key: 'a', value: 3},
			{key: 'b', value: 1},
			{key: 'c', value: 1},
		]);
	});
	it('should handle an empty object', () => {
		expect(objectToValueDescKeyAsc({})).toEqual([]);
	});
});
