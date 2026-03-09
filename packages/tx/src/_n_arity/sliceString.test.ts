import {describe, expect, it} from 'vitest';

import {sliceString} from './sliceString';

describe('sliceString', () => {
	it('should return the portion of the string from the begin index', () => {
		expect(sliceString('0123456789', 3)).toBe('3456789');
	});
	it('should return the portion of the string between begin and end indices', () => {
		expect(sliceString('0123456789', 3, 5)).toBe('34');
	});
	it('should support a negative end index', () => {
		expect(sliceString('0123456789', 3, -1)).toBe('345678');
	});
});
