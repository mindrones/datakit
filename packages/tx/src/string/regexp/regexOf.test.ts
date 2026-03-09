import {describe, it, expect} from 'vitest';

import {regexOf} from './regexOf';

describe('regexOf', () => {
	it('returns a regular expression based on the given string', () => {
		expect(regexOf('foo')).toEqual(/foo/giu);
	});
});
