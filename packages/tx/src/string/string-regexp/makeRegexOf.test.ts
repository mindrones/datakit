import {describe, it, expect} from 'vitest';

import {makeRegexOf} from './makeRegexOf';

describe('makeRegexOf', () => {
	it('returns a RegExp when called with flags and a string', () => {
		expect(makeRegexOf('gui')('foo')).toEqual(/foo/gui);
	});
	it('does NOT escape special regex characters — unlike makeSafeRegexOf', () => {
		// '+' is a quantifier; the regex matches 'fooobar', not the literal 'foo+bar'
		expect('fooobar').toMatch(makeRegexOf('u')('foo+bar'));
		expect('foo+bar').not.toMatch(makeRegexOf('u')('foo+bar'));
	});
});
