import {describe, it, expect} from 'vitest';

import {permutationsCount} from './permutationsCount';

describe('permutationsCount', () => {
	it('should return 1 for C(2,2)', () => {
		expect(permutationsCount([2, 2])).toBe(1);
	});
	it('should return 6 for C(4,2)', () => {
		expect(permutationsCount([4, 2])).toBe(6);
	});
	it('should return 10 for C(5,2)', () => {
		expect(permutationsCount([5, 2])).toBe(10);
	});
	it('should return 4 for C(4,3)', () => {
		expect(permutationsCount([4, 3])).toBe(4);
	});
});
