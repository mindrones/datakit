import {describe, it, expect} from 'vitest';

import {stringify} from './stringify';

describe('stringify', () => {
	it('should return a string representation of the input with indentation = 2', () => {
		expect(stringify([])).toEqual('[]');
		expect(stringify([1])).toEqual('[\n  1\n]');
		expect(stringify({a: 1})).toEqual('{\n  "a": 1\n}');
	});
	it('should indent nested objects with two spaces (JSDoc example)', () => {
		expect(stringify([{a: 1}, {a: 2}])).toEqual(
			'[\n  {\n    "a": 1\n  },\n  {\n    "a": 2\n  }\n]'
		);
	});
});
