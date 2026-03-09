import {describe, it, expect} from 'vitest';

import {exportedJsObjToAny} from './exportedJsObjToAny';

describe('exportedJsObjToAny', () => {
	it('should parse a plain JSON string', () => {
		expect(exportedJsObjToAny('{"a":1}')).toEqual({a: 1});
	});
	it('should parse with export default prefix', () => {
		expect(exportedJsObjToAny('export default {"a":1}')).toEqual({a: 1});
	});
	it('should handle trailing newline', () => {
		expect(exportedJsObjToAny('{"a":1}\n')).toEqual({a: 1});
	});
	it('should handle trailing semicolon', () => {
		expect(exportedJsObjToAny('{"a":1};')).toEqual({a: 1});
	});
	it('should handle export default with trailing newline and semicolon', () => {
		expect(exportedJsObjToAny('export default {"a":1};\n')).toEqual({a: 1});
	});
});
