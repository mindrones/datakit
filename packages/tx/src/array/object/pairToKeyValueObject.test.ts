import {describe, it, expect} from 'vitest';

import {pairToKeyValueObject} from './pairToKeyValueObject';

describe('pairToKeyValueObject', () => {
	it('returns {key, value} from a pair array', () => {
		expect(pairToKeyValueObject(['a', 2])).toEqual({key: 'a', value: 2});
		expect(pairToKeyValueObject([1, 2])).toEqual({key: 1, value: 2});
	});
	it('returns only first two elements', () => {
		expect(pairToKeyValueObject(['a', 2, 'b'])).toEqual({key: 'a', value: 2});
	});
	it('returns undefined value when second element is undefined', () => {
		expect(pairToKeyValueObject(['a', undefined])).toEqual({key: 'a', value: undefined});
	});
	it('returns both undefined when both elements are undefined', () => {
		expect(pairToKeyValueObject([undefined, undefined])).toEqual({key: undefined, value: undefined});
	});
	it('returns both undefined for empty array', () => {
		expect(pairToKeyValueObject([])).toEqual({key: undefined, value: undefined});
	});
});
