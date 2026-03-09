import {describe, it, expect} from 'vitest';

import {isRegexpNotEmpty} from './isRegexpNotEmpty';

describe('isRegexpNotEmpty', () => {
	it('should return true if regex is not empty', () => {
		expect(isRegexpNotEmpty(/^a/u)).toEqual(true);
	});

	it('should return false if regex is empty', () => {
		expect(isRegexpNotEmpty(/(?:)/u)).toEqual(false);
	});
});
