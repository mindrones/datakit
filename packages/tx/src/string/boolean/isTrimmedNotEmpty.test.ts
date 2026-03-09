import {describe, it, expect} from 'vitest';

import {isTrimmedNotEmpty} from './isTrimmedNotEmpty';

describe('isTrimmedNotEmpty', () => {
	it('should return true with "foo"', () => {
		expect(isTrimmedNotEmpty('foo')).toEqual(true);
	});
	it('should return true with "  foo  "', () => {
		expect(isTrimmedNotEmpty('  foo  ')).toEqual(true);
	});
	it('should return false with ""', () => {
		expect(isTrimmedNotEmpty('')).toEqual(false);
	});
	it('should return false with "  "', () => {
		expect(isTrimmedNotEmpty('  ')).toEqual(false);
	});
});
