import {describe, it, expect} from 'vitest';

import {joinWithColon} from './joinWithColon';

describe('joinWithColon', () => {
	it('joins strings with colons', () => {
		expect(joinWithColon(['a', 'b', 'c'])).toEqual('a:b:c');
	});
	it('joins numbers with colons', () => {
		expect(joinWithColon([0, 1, 2])).toEqual('0:1:2');
	});
	it('returns the single element as a string when given a one-element array', () => {
		expect(joinWithColon(['only'])).toEqual('only');
	});
});
