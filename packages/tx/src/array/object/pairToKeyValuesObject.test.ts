import {describe, it, expect} from 'vitest';

import {pairToKeyValuesObject} from './pairToKeyValuesObject';

describe('pairToKeyValuesObject', () => {
	it('returns {key, values} from a pair array', () => {
		expect(pairToKeyValuesObject(['a', [1, 2]])).toEqual({key: 'a', values: [1, 2]});
		expect(pairToKeyValuesObject([1, [1, 2]])).toEqual({key: 1, values: [1, 2]});
	});
	it('returns only first two elements', () => {
		expect(pairToKeyValuesObject([1, [1, 2], 3])).toEqual({key: 1, values: [1, 2]});
	});
});
