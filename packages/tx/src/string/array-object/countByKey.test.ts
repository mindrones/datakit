import {describe, it, expect} from 'vitest';

import {countByKey} from './countByKey';

describe('countByKey', () => {
	it('should count occurrences of each value for the provided key', () => {
		const countA = countByKey('a');
		expect(countA([
			{a: 1, b: 2},
			{a: 1, b: 4},
			{a: 'foo', b: 6},
			{a: 'bar', b: 7},
		])).toEqual({'1': 2, 'foo': 1, 'bar': 1});
	});
	it('should return an empty object for an empty array', () => {
		expect(countByKey('a')([])).toEqual({});
	});
	it('should count a single item', () => {
		expect(countByKey('a')([{a: 'x'}])).toEqual({x: 1});
	});
	it('should count each unique value separately', () => {
		const countType = countByKey('type');
		expect(countType([
			{type: 'a'},
			{type: 'b'},
			{type: 'a'},
			{type: 'c'},
			{type: 'b'},
			{type: 'b'},
		])).toEqual({a: 2, b: 3, c: 1});
	});
});
