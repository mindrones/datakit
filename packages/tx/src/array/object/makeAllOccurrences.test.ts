import {describe, it, expect} from 'vitest';

import {makeAllOccurrences} from './makeAllOccurrences';

describe('makeAllOccurrences', () => {
	it('should create an object of occurrences from an array of objects', () => {
		expect(makeAllOccurrences([
			{a: 1},
			{a: 6, b: -1},
			{a: 2, b: 0, c: 1},
			{c: 4, e: 2}
		])).toEqual({a: 3, b: 2, c: 2, e: 1});
	});
});
