import {describe, it, expect} from 'vitest';

import {getShorter} from './getShorter';

describe('getShorter', () => {
	it('returns the shorter iterable', () => {
		expect(getShorter([[1, 2], [1], [1, 2, 3], ['a']])).toEqual([1]);
		expect(getShorter([[], [1], [2], []])).toEqual([]);
		expect(getShorter(['abc', 'a', [1]])).toEqual('a');
		expect(getShorter(['bc', 'g', ''])).toEqual('');
	});
	it('returns the first of a pair with equal length', () => {
		expect(getShorter([[3, 4], [1, 2]])).toEqual([3, 4]);
		expect(getShorter(['b', 'a'])).toEqual('b');
	});
	it('returns undefined for an empty input', () => {
		expect(getShorter([])).toEqual(undefined);
	});
});
