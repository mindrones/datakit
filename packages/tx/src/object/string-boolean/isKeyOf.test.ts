import {describe, it, expect} from 'vitest';

import {isKeyOf} from './isKeyOf';

describe('isKeyOf', () => {
	it('should return a function that checks if the expected string is a key of the provided object', () => {
		const isKeyOfObj = isKeyOf({a: 1, b: 2});

		expect(isKeyOfObj('a')).toBe(true);
		expect(isKeyOfObj('c')).toBe(false);
	});
});
