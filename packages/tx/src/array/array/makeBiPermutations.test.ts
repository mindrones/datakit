import {describe, it, expect} from 'vitest';

import {makeBiPermutations} from './makeBiPermutations';

describe('makeBiPermutations', () => {
	it('should return the permutations of pairs of the provided items', () => {
		const items = [
			{foo: 'a'},
			{foo: 'b'},
			{bar: 'c'},
			{bar: 'd'}
		];
		const actual = makeBiPermutations(items);
		const expected = [
			[{foo: 'a'}, {foo: 'b'}],
			[{foo: 'a'}, {bar: 'c'}],
			[{foo: 'a'}, {bar: 'd'}],
			[{foo: 'b'}, {bar: 'c'}],
			[{foo: 'b'}, {bar: 'd'}],
			[{bar: 'c'}, {bar: 'd'}]
		];
		expect(actual).toEqual(expected);
	});
	it('should return an empty array if provided an empty array', () => {
		expect(makeBiPermutations([])).toEqual([]);
	});
});
