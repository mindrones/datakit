import {describe, it, expect} from 'vitest';

import {joinWithNewline} from './array-string.js';

describe('joinWithNewline', () => {
	it('joins numbers with `\n`', () => {
		const actual = joinWithNewline([1, 2, 3]);
		const expected = '1\n2\n3';
		expect(actual).toEqual(expected);
	});
	it('joins strings with `\n`', () => {
		const actual = joinWithNewline(['1', '2', '3']);
		const expected = '1\n2\n3';
		expect(actual).toEqual(expected);
	});
});
