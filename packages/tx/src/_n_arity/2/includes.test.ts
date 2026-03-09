import {describe, expect, it} from 'vitest';

import {includes} from './includes';

describe('includes', () => {
	it('should return true if the value is in the array', () => {
		expect(includes([0, 1, 2], 2)).toBe(true);
	});
	it('should return false if the value is not in the array', () => {
		expect(includes([0, 1, 2], 3)).toBe(false);
	});
});
