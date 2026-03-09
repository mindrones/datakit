import {describe, it, expect} from 'vitest';

import {mapValuesToFloatPossibly} from './mapValuesToFloatPossibly';

describe('mapValuesToFloatPossibly', () => {
	it('should return a copy of the object with values converted to numbers everywhere if possible', () => {
		expect(mapValuesToFloatPossibly({a: '1.2', b: '2px'})).toEqual({a: 1.2, b: 2});
	});
	it('should return a copy of the object with values converted to numbers only where possible', () => {
		expect(mapValuesToFloatPossibly({a: '1.2', b: '2px', c: 'h2o'})).toEqual({a: 1.2, b: 2, c: 'h2o'});
		expect(mapValuesToFloatPossibly({a: 'a', b: 'b'})).toEqual({a: 'a', b: 'b'});
	});
});
