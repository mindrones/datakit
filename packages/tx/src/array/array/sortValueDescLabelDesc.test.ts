import {describe, it, expect} from 'vitest';

import {sortValueDescLabelDesc} from './sortValueDescLabelDesc';

describe('sortValueDescLabelDesc', () => {
	it('should sort by value descending then label descending', () => {
		const items = [
			{key: 'a', label: 'a', value: 1},
			{key: 'b', label: 'z', value: 1},
			{key: 'c', label: 'm', value: 3},
		];
		expect(sortValueDescLabelDesc(items)).toEqual([
			{key: 'c', label: 'm', value: 3},
			{key: 'b', label: 'z', value: 1},
			{key: 'a', label: 'a', value: 1},
		]);
	});
});
