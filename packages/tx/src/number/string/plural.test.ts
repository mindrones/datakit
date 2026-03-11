import {describe, it, expect} from 'vitest';

import {plural} from './plural';

describe('plural', () => {
	it('should return empty string for 1', () => {
		expect(plural(1)).toBe('');
	});
	it('should return "s" for 0', () => {
		expect(plural(0)).toBe('s');
	});
	it('should return "s" for 2', () => {
		expect(plural(2)).toBe('s');
	});
	it('should return "s" for negative numbers', () => {
		expect(plural(-1)).toBe('s');
	});
});
