import {describe, it, expect} from 'vitest';

import {mapValuesToNumber} from './mapValuesToNumber';

describe('mapValuesToNumber', () => {
	it('should return a copy of the object with values converted to numbers', () => {
		expect(mapValuesToNumber({a: '1.2', b: '2'})).toEqual({a: 1.2, b: 2});
	});
});
