import {describe, it, expect} from 'vitest';

import {isGT0} from './isGT0';

describe('isGT0', () => {
	it('should return true if the provided number is greater than 0', () => {
		expect(isGT0(1)).toEqual(true);
	});
	it('should return false if the provided number is not greater than 0', () => {
		expect(isGT0(-1)).toEqual(false);
		expect(isGT0(0)).toEqual(false);
	});
});
