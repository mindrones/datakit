import {describe, it, expect} from 'vitest';

import {isRegexpEmpty} from './isRegexpEmpty';

describe('isRegexpEmpty', () => {
	it('should return true if regex is empty', () => {
		expect(isRegexpEmpty(/(?:)/u)).toEqual(true);
	});

	it('should return false if regex is not empty', () => {
		expect(isRegexpEmpty(/^a/u)).toEqual(false);
	});
});
