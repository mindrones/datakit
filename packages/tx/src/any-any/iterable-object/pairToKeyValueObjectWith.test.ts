import {describe, expect, it} from 'vitest';

import {pairToKeyValueObjectWith} from './pairToKeyValueObjectWith';

describe('pairToKeyValueObjectWith', () => {
	it('should return a {key, value} object using the accessor on the second element', () => {
		const objectifySelfSum = pairToKeyValueObjectWith((x: string) => x + x);

		expect(objectifySelfSum([])).toEqual({key: undefined, value: undefined});
		expect(objectifySelfSum(['a'])).toEqual({key: 'a', value: undefined});
		expect(objectifySelfSum(['a', 'b'])).toEqual({key: 'a', value: 'bb'});
		expect(objectifySelfSum(['a', 'b', 'c'])).toEqual({key: 'a', value: 'bb'});
	});

	it('should work with string iterables', () => {
		const objectifySelfSum = pairToKeyValueObjectWith((x: string) => x + x);

		expect(objectifySelfSum('')).toEqual({key: undefined, value: undefined});
		expect(objectifySelfSum('a')).toEqual({key: 'a', value: undefined});
		expect(objectifySelfSum('ab')).toEqual({key: 'a', value: 'bb'});
		expect(objectifySelfSum('abc')).toEqual({key: 'a', value: 'bb'});
	});

	it('should work with arrays', () => {
		const objectifyGetA = pairToKeyValueObjectWith(
			(x: {a?: number}) => x.a
		);

		expect(objectifyGetA([])).toEqual({key: undefined, value: undefined});
		expect(objectifyGetA([1])).toEqual({key: 1, value: undefined});
		expect(objectifyGetA([1, {a: 2}])).toEqual({key: 1, value: 2});
		expect(objectifyGetA([1, {a: 2}, 3])).toEqual({key: 1, value: 2});
	});

	it('should work with arguments objects', () => {
		const objectifyGetA = pairToKeyValueObjectWith(
			(x: {a?: number}) => x.a
		);
		function func(...args: unknown[]) {
			return objectifyGetA(args);
		}

		expect(func()).toEqual({key: undefined, value: undefined});
		expect(func(1)).toEqual({key: 1, value: undefined});
		expect(func(1, {a: 2})).toEqual({key: 1, value: 2});
		expect(func(1, {a: 2}, 3)).toEqual({key: 1, value: 2});
	});
});
