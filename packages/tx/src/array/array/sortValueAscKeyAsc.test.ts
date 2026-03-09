import {describe, it, expect} from 'vitest';

import {sortValueAscKeyAsc} from './sortValueAscKeyAsc';

describe('sortValueAscKeyAsc', () => {
	it('should return a copy of the provided array with items sorted by `value` (ascending) then by `key` (ascending)', () => {
		const items = [
			{key: 'b', value: 1},
			{key: 'a', value: 4},
			{key: 'a', value: -30},
			{key: 'a', value: 1},
		];
		expect(sortValueAscKeyAsc(items)).toEqual([
			{key: 'a', value: -30},
			{key: 'a', value: 1},
			{key: 'b', value: 1},
			{key: 'a', value: 4},
		]);
	});
});
