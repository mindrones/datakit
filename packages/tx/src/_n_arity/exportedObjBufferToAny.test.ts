import {describe, expect, it} from 'vitest';

import {exportedObjBufferToAny} from './exportedObjBufferToAny';

describe('exportedObjBufferToAny', () => {
	const encoder = new TextEncoder();

	it('should decode a plain JSON buffer into a JS object', () => {
		const buffer = encoder.encode('{"a": 1}');
		expect(exportedObjBufferToAny(buffer)).toEqual({a: 1});
	});
	it('should decode a buffer with an `export default` prefix into a JS object', () => {
		const buffer = encoder.encode('export default {"a": 1}');
		expect(exportedObjBufferToAny(buffer)).toEqual({a: 1});
	});
});
