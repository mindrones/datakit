import {describe, it, expect} from 'vitest';

import {makeStartsWith, skipIfKeyWith} from '@datakit/tx';

describe('skipIfKeyWith', () => {
	it('should return a function expecting an object and returning a new object without the keys satisfying the provided predicate', () => {
		const keysDontStartWithA = skipIfKeyWith(makeStartsWith('a'));

		expect(keysDontStartWithA({a: 1, aa: 2, b: 0, c: 0})).toEqual({b: 0, c: 0});
		expect(keysDontStartWithA({b: 0, c: 0})).toEqual({b: 0, c: 0});
	});
});
