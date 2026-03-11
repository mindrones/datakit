import {describe, it, expect} from 'vitest';

import {sortValueDescLabelLowercaseDesc} from './sortValueDescLabelLowercaseDesc';

describe('sortValueDescLabelLowercaseDesc', () => {
	it('should sort by value descending then label lowercase descending', () => {
		const items = [
			{key: 'a', label: 'a', value: 1},
			{key: 'b', label: 'Z', value: 1},
			{key: 'c', label: 'm', value: 3},
		];
		expect(sortValueDescLabelLowercaseDesc(items)).toEqual([
			{key: 'c', label: 'm', value: 3},
			{key: 'b', label: 'Z', value: 1},
			{key: 'a', label: 'a', value: 1},
		]);
	});
});
