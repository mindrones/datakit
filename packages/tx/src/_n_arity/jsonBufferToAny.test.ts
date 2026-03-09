import {describe, expect, it} from 'vitest';

import {jsonBufferToAny} from './jsonBufferToAny';

describe('jsonBufferToAny', () => {
	it('should convert a buffer representing a JSON object into a JS object', () => {
		const encoder = new TextEncoder();
		const buffer = encoder.encode('{"a": 1}');
		expect(jsonBufferToAny(buffer)).toEqual({a: 1});
	});
});
