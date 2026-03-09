import {describe, it, expect} from 'vitest';

import {joinWithSemicolon} from './joinWithSemicolon';

describe('joinWithSemicolon', () => {
	it('joins strings with semicolons', () => {
		expect(joinWithSemicolon(['a', 'b', 'c'])).toEqual('a;b;c');
	});
	it('joins numbers with semicolons', () => {
		expect(joinWithSemicolon([0, 1, 2])).toEqual('0;1;2');
	});
	it('returns the single element as a string when given a one-element array', () => {
		expect(joinWithSemicolon(['only'])).toEqual('only');
	});
});
