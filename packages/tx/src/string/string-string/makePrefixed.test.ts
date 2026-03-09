import {describe, it, expect} from 'vitest';

import {makePrefixed} from './makePrefixed';

describe('makePrefixed', () => {
	it('should return a function that prepends the provided string to the input string', () => {
		const prefixed = makePrefixed('---');

		expect(prefixed('A')).toEqual('---A');
		expect(prefixed('B')).toEqual('---B');
	});
});
