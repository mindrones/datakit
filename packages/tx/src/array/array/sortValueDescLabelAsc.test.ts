import {describe, it, expect} from 'vitest';

import {sortValueDescLabelAsc} from './sortValueDescLabelAsc';

describe('sortValueDescLabelAsc', () => {
	it('should sort by value descending then label ascending', () => {
		const items = [
			{key: 'a', label: 'z', value: 1},
			{key: 'b', label: 'a', value: 1},
			{key: 'c', label: 'm', value: 3},
		];
		expect(sortValueDescLabelAsc(items)).toEqual([
			{key: 'c', label: 'm', value: 3},
			{key: 'b', label: 'a', value: 1},
			{key: 'a', label: 'z', value: 1},
		]);
	});
});
