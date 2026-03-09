import {describe, it, expect} from 'vitest';

import {findValueWith, isKeyValue} from '@datakit/tx';

describe('findValueWith', () => {
	it('should return the first value satisfying the predicate', () => {
		const findFirstOdd = findValueWith((x: number) => x % 2 === 1);
		expect(findFirstOdd({a: 2, b: 4, c: 3, d: 6, e: 7})).toEqual(3);
	});
	it('should work with a composed predicate', () => {
		const findItem = findValueWith(isKeyValue(['max', 10]));
		const actual = findItem({
			a: {id: 'foo', min: 1, max: 2},
			b: {id: 'bar', min: -1, max: 10},
			c: {id: 'baz', min: -4, max: 10}
		});
		const expected = {id: 'bar', min: -1, max: 10};
		expect(actual).toEqual(expected);
	});
	it('should return `undefined` when no value matches the predicate', () => {
		const findFirstOdd = findValueWith((x: number) => x % 2 === 1);
		expect(findFirstOdd({a: 2, b: 4, c: 6})).toBeUndefined();
	});
});
