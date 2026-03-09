import {describe, it, expect} from 'vitest';

import {makeIndexByKey} from './makeIndexByKey';

describe('makeIndexByKey', () => {
	it('should return an object with array elements as keys and values equal to their index - strings', () => {
		expect(makeIndexByKey(['a', 'b'])).toEqual({a: 0, b: 1});
	});
	it('should return an object with array elements as keys and values equal to their index - numbers', () => {
		expect(makeIndexByKey([2, -4])).toEqual({'2': 0, '-4': 1});
	});
	it('should return an object with array elements as keys and values equal to their index - arrays', () => {
		expect(makeIndexByKey([[1,2,3], [3,4,5], [1,2,3]])).toEqual({'3,4,5': 1, '1,2,3': 2});
		expect(makeIndexByKey([[1,2,{a:1}], [3,4,5], [1,2,3]])).toEqual({
			'1,2,[object Object]': 0,
			'3,4,5': 1,
			'1,2,3': 2
		});
	});
	it('should return an object with array elements as keys and values equal to their index - objects', () => {
		expect(makeIndexByKey([{a: 1}, {b: 2}, {c: 3}])).toEqual({'[object Object]': 2});
	});
});
