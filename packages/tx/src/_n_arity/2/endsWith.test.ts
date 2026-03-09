import {describe, expect, it} from 'vitest';

import {endsWith} from './endsWith';

describe('endsWith', () => {
	it('should return true if the input string ends with the test string', () => {
		expect(endsWith('Ping', 'ing')).toBe(true);
	});
	it('should return false if the input string does not end with the test string', () => {
		expect(endsWith('Pong', 'ing')).toBe(false);
	});
});
