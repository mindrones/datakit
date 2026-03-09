import {describe, it, expect} from 'vitest';

import {joinWithDash} from './joinWithDash';

describe('joinWithDash', () => {
	it('joins strings with dashes', () => {
		expect(joinWithDash(['a', 'b', 'c'])).toEqual('a-b-c');
	});
	it('joins numbers with dashes', () => {
		expect(joinWithDash([0, 1, 2])).toEqual('0-1-2');
	});
	it('returns the single element as a string when given a one-element array', () => {
		expect(joinWithDash(['only'])).toEqual('only');
	});
});
