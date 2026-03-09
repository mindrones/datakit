import {describe, it, expect} from 'vitest';

import {is1} from './is1';

describe('is1', () => {
	it('should return true if the provided number is 1', () => {
		expect(is1(1)).toEqual(true);
	});
	it('should return false if the provided number is not 1', () => {
		expect(is1(2)).toEqual(false);
	});
});
