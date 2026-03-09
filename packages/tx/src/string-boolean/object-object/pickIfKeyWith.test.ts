import {describe, it, expect} from 'vitest';

import {makeStartsWith, pickIfKeyWith} from '@datakit/tx';

describe('pickIfKeyWith', () => {
	it('should return a function expecting an object and returning a new object with only the keys satisfying the provided predicate', () => {
		const keysStartWithA = pickIfKeyWith(makeStartsWith('a'));

		expect(keysStartWithA({a: 1, aa: 2, b: 0, c: 0})).toEqual({a: 1, aa: 2});
		expect(keysStartWithA({b: 0, c: 0})).toEqual({});
	});
});
