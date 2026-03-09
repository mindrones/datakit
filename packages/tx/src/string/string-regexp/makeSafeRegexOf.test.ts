import {describe, it, expect} from 'vitest';

import {makeSafeRegexOf} from './makeSafeRegexOf';

describe('makeSafeRegexOf', () => {
	it('returns a RegExp when called with flags and a string', () => {
		expect(makeSafeRegexOf('ui')('foo')).toEqual(/foo/ui);
	});
	it('escapes the string before returning the RegExp', () => {
		expect(makeSafeRegexOf('ui')('foo.*')).toEqual(/foo\.\*/ui);
	});
});
