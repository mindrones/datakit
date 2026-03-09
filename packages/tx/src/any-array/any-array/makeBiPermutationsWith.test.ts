import {describe, it, expect} from 'vitest';

import {getValue, makeBiPermutationsWith} from '@datakit/tx';

describe('makeBiPermutationsWith', () => {
	it('should return a function returning the pair-permutations of the items returned by the provided accessor', () => {
		const makeBiPermutations = makeBiPermutationsWith(getValue);
		const object = {
			key: 'foobars',
			value: [
				{foo: 'a'},
				{foo: 'b'},
				{bar: 'c'},
				{bar: 'd'}
			]
		};
		const actual = makeBiPermutations(object);
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
});
