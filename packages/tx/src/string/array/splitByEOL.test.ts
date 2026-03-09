import {describe, it, expect} from 'vitest';

import {splitByEOL} from './splitByEOL';

describe('splitByEOL', () => {
	it('should return an array by splitting by "\\n"', () => {
		expect(splitByEOL('a\nb\nc')).toEqual(['a', 'b', 'c']);
	});
});
