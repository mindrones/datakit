import {describe, expect, it} from 'vitest';

import {split} from './split';

describe('split', () => {
	it('should split the string with the provided string separator', () => {
		expect(split('a-b-c', '-')).toEqual(['a', 'b', 'c']);
	});
	it('should split a string using a regex separator', () => {
		expect(split('a1b2c', /\d/)).toEqual(['a', 'b', 'c']);
	});
});
