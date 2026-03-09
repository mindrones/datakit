import {describe, expect, it} from 'vitest';

import {startsWith} from './startsWith';

describe('startsWith', () => {
	it('should return true if the input string starts with the test string', () => {
		expect(startsWith('Ping', 'Pin')).toBe(true);
	});
	it('should return false if the input string does not start with the test string', () => {
		expect(startsWith('Pong', 'Pin')).toBe(false);
	});
});
