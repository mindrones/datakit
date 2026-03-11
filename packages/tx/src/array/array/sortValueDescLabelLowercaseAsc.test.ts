import {describe, it, expect} from 'vitest';

import {sortValueDescLabelLowercaseAsc} from './sortValueDescLabelLowercaseAsc';

describe('sortValueDescLabelLowercaseAsc', () => {
	it('should sort by value descending then label lowercase ascending', () => {
		const items = [
			{key: 'a', label: 'Z', value: 1},
			{key: 'b', label: 'a', value: 1},
			{key: 'c', label: 'M', value: 3},
		];
		expect(sortValueDescLabelLowercaseAsc(items)).toEqual([
			{key: 'c', label: 'M', value: 3},
			{key: 'b', label: 'a', value: 1},
			{key: 'a', label: 'Z', value: 1},
		]);
	});
});
