import {describe, it, expect} from 'vitest';

import {sortValueAscKeyDesc} from './sortValueAscKeyDesc';

describe('sortValueAscKeyDesc', () => {
	it('should return a copy of the provided array with items sorted by `value` (ascending) then by `key` (descending)', () => {
		const items = [
			{key: 'b', value: 1},
			{key: 'a', value: 4},
			{key: 'a', value: -30},
			{key: 'a', value: 1},
		];
		expect(sortValueAscKeyDesc(items)).toEqual([
			{key: 'a', value: -30},
			{key: 'b', value: 1},
			{key: 'a', value: 1},
			{key: 'a', value: 4},
		]);
	});
});
