import {describe, it, expect} from 'vitest';

import {endsWithNewLine} from './endsWithNewLine';

describe('endsWithNewLine', () => {
	it('should return true if the string ends with a newline (Unix)', () => {
		expect(endsWithNewLine('abc\n')).toEqual(true);
	});
	it('should return true if the string ends with a newline (Windows)', () => {
		expect(endsWithNewLine('abc\r\n')).toEqual(true);
	});
	it('should return false if the string does not end with a newline', () => {
		expect(endsWithNewLine('abc')).toEqual(false);
	});
});
