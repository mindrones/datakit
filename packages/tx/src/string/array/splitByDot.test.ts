import {describe, it, expect} from 'vitest';

import {splitByDot} from './splitByDot';

describe('splitByDot', () => {
	it('should return an array by splitting by "."', () => {
		expect(splitByDot('a.b.c')).toEqual(['a', 'b', 'c']);
	});
});
