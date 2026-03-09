import {describe, it, expect} from 'vitest';

import {sortValueDescKeyDesc} from './sortValueDescKeyDesc';

describe('sortValueDescKeyDesc', () => {
	it('should return a copy of the provided array with items sorted by `value` (descending) then by `key` (descending)', () => {
		const items = [
			{key: 'b', value: 1},
			{key: 'a', value: 4},
			{key: 'a', value: -30},
			{key: 'a', value: 1},
		];
		expect(sortValueDescKeyDesc(items)).toEqual([
			{key: 'a', value: 4},
			{key: 'b', value: 1},
			{key: 'a', value: 1},
			{key: 'a', value: -30},
		]);
	});
});
