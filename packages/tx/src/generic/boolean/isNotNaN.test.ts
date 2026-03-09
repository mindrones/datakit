import {describe, it, expect} from 'vitest';

import {isNotNaN} from './isNotNaN';

describe('isNotNaN', () => {
	it('should return `true` if the input is not a NaN', () => {
		expect(isNotNaN(1)).toEqual(true);
		expect(isNotNaN(Infinity)).toEqual(true);
		expect(isNotNaN([123])).toEqual(true);
		expect(isNotNaN('123')).toEqual(true);
		expect(isNotNaN(true)).toEqual(true);
		expect(isNotNaN(false)).toEqual(true);
		expect(isNotNaN(null)).toEqual(true);
	});
	it('should return `false` if the input is a NaN', () => {
		expect(isNotNaN(NaN)).toEqual(false);
	});
});
