import {describe, it, expect} from 'vitest';

import {makePostfixed} from './makePostfixed';

describe('makePostfixed', () => {
	it('should return a function that appends the provided string to the input string', () => {
		const postfixed = makePostfixed('---');

		expect(postfixed('A')).toEqual('A---');
		expect(postfixed('B')).toEqual('B---');
	});
});
