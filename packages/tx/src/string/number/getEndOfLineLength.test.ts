import {describe, it, expect} from 'vitest';

import {getEndOfLineLength} from './getEndOfLineLength';

describe('getEndOfLineLength', () => {
	it('should return 0 if the input string has no end of line', () => {
		expect(getEndOfLineLength('hello')).toEqual(0);
	});
	it('should return 1 if the input string has the Unix end of line', () => {
		expect(getEndOfLineLength('hello\n')).toEqual(1);
	});
	it('should return 2 if the input string has the Windows end of line', () => {
		expect(getEndOfLineLength('hello\r\n')).toEqual(2);
	});
});
