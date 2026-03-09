import {describe, it, expect} from 'vitest';

import {sortValueDescKeyAsc} from './sortValueDescKeyAsc';

describe('sortValueDescKeyAsc', () => {
	it('should return a copy of the provided array with items sorted by `value` (descending) then by `key` (ascending)', () => {
		const items = [
			{key: 'b', value: 1},
			{key: 'a', value: 4},
			{key: 'a', value: -30},
			{key: 'a', value: 1},
		];
		expect(sortValueDescKeyAsc(items)).toEqual([
			{key: 'a', value: 4},
			{key: 'a', value: 1},
			{key: 'b', value: 1},
			{key: 'a', value: -30},
		]);
	});
});
