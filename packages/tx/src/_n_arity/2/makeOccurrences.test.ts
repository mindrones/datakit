import {describe, it, expect} from 'vitest';

import {makeOccurrences} from './makeOccurrences';

describe('makeOccurrences', () => {
	it('should create an object of occurrences from an array of objects given an array of target keys', () => {
		expect(makeOccurrences([
			{a: 1, b: 1},
			{b: 1},
			{a: 1},
			{c: 1, b: 1}
		], ['a'])).toEqual({a: 2});
		expect(makeOccurrences([
			{a: 1, b: 1},
			{b: 1},
			{a: 1},
			{c: 1, b: 1}
		], ['a', 'b'])).toEqual({a: 2, b: 3});
	});
	it('should create an object with zero occurrences if some target keys aren\'t found', () => {
		expect(makeOccurrences([
			{a: 1, b: 1},
			{b: 1},
		], ['b', 'c'])).toEqual({b: 2, c: 0});
	});
});
