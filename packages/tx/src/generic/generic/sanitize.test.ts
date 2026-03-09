import {describe, it, expect} from 'vitest';

import {sanitize} from './sanitize';

describe('sanitize', () => {
	it('should sanitize objects', () => {
		expect(sanitize({a: 1, b: undefined})).toEqual({a: 1});
	});
	it('should sanitize nested objects', () => {
		expect(
			sanitize({a: 1, b: {c: 2, d: undefined}})
		).toEqual({a: 1, b: {c: 2}});
	});
	it('should sanitize arrays by substituting `undefined`s with `null`s', () => {
		expect(sanitize([undefined])).toEqual([null]);
		expect(sanitize([1, undefined, 2])).toEqual([1, null, 2]);
	});
	it('should sanitize arrays containing objects', () => {
		expect(sanitize([{a: 1, b: undefined}, undefined])).toEqual([{a: 1}, null]);
	});
	it('should sanitize arrays containing nested objects', () => {
		expect(
			sanitize([{a: 1, b: {c: 2, d: undefined}}, undefined])
		).toEqual([{a: 1, b: {c: 2}}, null]);
	});
	it('should throw a SyntaxError when called with `undefined`', () => {
		expect(() => sanitize(undefined)).toThrow(SyntaxError);
	});
	it('should coerce `NaN` to `null`', () => {
		expect(sanitize(NaN)).toBeNull();
	});
	it('should coerce `Infinity` to `null`', () => {
		expect(sanitize(Infinity)).toBeNull();
		expect(sanitize(-Infinity)).toBeNull();
	});
});
