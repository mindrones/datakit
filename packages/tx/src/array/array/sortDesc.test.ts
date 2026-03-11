import {describe, it, expect} from 'vitest';

import {sortDesc} from './sortDesc';

describe('sortDesc', () => {
	it('should sort numbers in descending order', () => {
		expect(sortDesc([3, 1, 2])).toEqual([3, 2, 1]);
	});
	it('should sort strings in descending order', () => {
		expect(sortDesc(['b', 'a', 'c'])).toEqual(['c', 'b', 'a']);
	});
	it('should return an empty array unchanged', () => {
		expect(sortDesc([])).toEqual([]);
	});
});
