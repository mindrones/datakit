import {describe, it, expect} from 'vitest';

import {roundTo} from './roundTo';

describe('roundTo', () => {
	it('should return a function that rounds the input number to the provided number of digits', () => {
		const roundTo2 = roundTo(2);
		expect(roundTo2(2.41285)).toEqual(2.41);
		expect(roundTo2(2.41785)).toEqual(2.42);
	});
});
