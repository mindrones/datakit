import {describe, it, expect} from 'vitest';

import {splitBySemiColon} from './splitBySemiColon';

describe('splitBySemiColon', () => {
	it('should return an array by splitting by ";"', () => {
		expect(splitBySemiColon('a;b;c')).toEqual(['a', 'b', 'c']);
	});
});
