import {describe, it, expect} from 'vitest';
import * as _ from 'lamb';

import {hasKeyWith} from './hasKeyWith';

describe('hasKeyWith', () => {
	it('should return a function expecting an object and returning `true` if the input object has a key satisfying the provided predicate', () => {
		const hasA = hasKeyWith(_.is('a'));

		expect(hasA({a: 2, b: 4, c: 3})).toEqual(true);
		expect(hasA({b: 4, c: 3})).toEqual(false);
	});
});
