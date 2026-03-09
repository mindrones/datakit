import {describe, it, expect} from 'vitest';

import {safeRegexOf} from './safeRegexOf';

describe('safeRegexOf', () => {
	it('returns a safe regular expression with special characters escaped', () => {
		expect(safeRegexOf('foo+bar')).toEqual(/foo\+bar/giu);
	});
});
