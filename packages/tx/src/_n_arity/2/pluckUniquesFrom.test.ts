import {describe, it, expect} from 'vitest';

import {pluckUniquesFrom} from './pluckUniquesFrom';

describe('pluckUniquesFrom', () => {
	it('should return unique values for the given key', () => {
		expect(pluckUniquesFrom([{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 2}], 'a')).toEqual([1, 2]);
	});
	it('should return all values if all are unique', () => {
		expect(pluckUniquesFrom([{a: 1}, {a: 2}, {a: 3}], 'a')).toEqual([1, 2, 3]);
	});
	it('should return an empty array for empty input', () => {
		expect(pluckUniquesFrom([], 'a')).toEqual([]);
	});
});
