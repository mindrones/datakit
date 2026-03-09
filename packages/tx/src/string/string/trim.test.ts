import {describe, expect, it} from 'vitest';

import {trim} from './trim';

describe('trim', () => {
	it('should trim whitespace from both ends of a string', () => {
		expect(trim(' abc \n ')).toBe('abc');
		expect(trim(' abc ')).toBe('abc');
		expect(trim('abc ')).toBe('abc');
		expect(trim(' abc')).toBe('abc');
		expect(trim('\nabc')).toBe('abc');
		expect(trim('abc\n')).toBe('abc');
		expect(trim('\nabc\n')).toBe('abc');
	});
});
