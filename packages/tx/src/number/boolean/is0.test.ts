import {describe, it, expect} from 'vitest';

import {is0} from './is0';

describe('is0', () => {
	it('should return true if the provided number is 0', () => {
		expect(is0(0)).toEqual(true);
	});
	it('should return false if the provided number is not 0', () => {
		expect(is0(2)).toEqual(false);
	});
});
