import {describe, it, expect} from 'vitest';

import {makeIsWithinRange} from './makeIsWithinRange';

describe('makeIsWithinRange', () => {
	it('should return a function returning true if the number is within the provided range', () => {
		const isWithinRange = makeIsWithinRange([0, 5]);

		expect(isWithinRange(-1)).toEqual(false);
		expect(isWithinRange(0)).toEqual(true);
		expect(isWithinRange(2)).toEqual(true);
		expect(isWithinRange(5)).toEqual(true);
		expect(isWithinRange(8)).toEqual(false);
	});
});
