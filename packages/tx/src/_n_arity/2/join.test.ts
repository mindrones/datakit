import {describe, expect, it} from 'vitest';

import {join} from './join';

describe('join', () => {
	it('should join an array with the provided separator', () => {
		expect(join([0, 1, 2], '-')).toBe('0-1-2');
	});
	it('should join an array with commas when no separator is given', () => {
		expect(join([0, 1, 2])).toBe('0,1,2');
	});
});
