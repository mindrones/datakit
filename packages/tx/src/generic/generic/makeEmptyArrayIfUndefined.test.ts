import {describe, it, expect} from 'vitest';

import {makeEmptyArrayIfUndefined} from './makeEmptyArrayIfUndefined';

describe('makeEmptyArrayIfUndefined', () => {
	it('should create [] from undefined', () => {
		expect(makeEmptyArrayIfUndefined(undefined)).toEqual([]);
	});
	it('should leave untouched if null', () => {
		expect(makeEmptyArrayIfUndefined(null)).toEqual(null);
	});
	it('should leave untouched if defined', () => {
		expect(makeEmptyArrayIfUndefined(4)).toEqual(4);
		expect(makeEmptyArrayIfUndefined([1, 2])).toEqual([1, 2]);
		expect(makeEmptyArrayIfUndefined({a: 1})).toEqual({a: 1});
		expect(makeEmptyArrayIfUndefined('str')).toEqual('str');
	});
	it('should create different objects each time it gets called', () => {
		const a = makeEmptyArrayIfUndefined(undefined);
		const b = makeEmptyArrayIfUndefined(undefined);
		expect(a).not.toBe(b);
	});
});
