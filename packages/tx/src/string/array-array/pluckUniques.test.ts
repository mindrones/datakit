import {describe, it, expect} from 'vitest';

import {pluckUniques} from './pluckUniques';

describe('pluckUniques', () => {
	it('should return a function that plucks unique values for the given key', () => {
		const pluckUniquesA = pluckUniques('a');
		expect(pluckUniquesA([{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 2}])).toEqual([1, 2]);
	});
	it('should return all values if all are unique', () => {
		const pluckUniquesA = pluckUniques('a');
		expect(pluckUniquesA([{a: 1}, {a: 2}, {a: 3}])).toEqual([1, 2, 3]);
	});
	it('should return empty array for empty input', () => {
		const pluckUniquesA = pluckUniques('a');
		expect(pluckUniquesA([])).toEqual([]);
	});
});
