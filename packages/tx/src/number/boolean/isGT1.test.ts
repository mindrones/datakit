import {describe, it, expect} from 'vitest';

import {isGT1} from './isGT1';

describe('isGT1', () => {
	it('should return true if the provided number is greater than 1', () => {
		expect(isGT1(2)).toEqual(true);
	});
	it('should return false if the provided number is not greater than 1', () => {
		expect(isGT1(0)).toEqual(false);
		expect(isGT1(1)).toEqual(false);
	});
});
