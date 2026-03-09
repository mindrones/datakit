import {describe, it, expect} from 'vitest';

import {joinWithBlank} from './joinWithBlank';

describe('joinWithBlank', () => {
	it('joins strings with blanks', () => {
		expect(joinWithBlank(['a', 'b', 'c'])).toEqual('a b c');
	});
	it('joins numbers with blanks', () => {
		expect(joinWithBlank([0, 1, 2])).toEqual('0 1 2');
	});
	it('returns the single element as a string when given a one-element array', () => {
		expect(joinWithBlank(['only'])).toEqual('only');
	});
});
