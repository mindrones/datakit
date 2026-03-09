import {describe, it, expect} from 'vitest';

import {mapValuesToFloat} from './mapValuesToFloat';

describe('mapValuesToFloat', () => {
	it('should return a copy of the object with values converted to float', () => {
		expect(mapValuesToFloat({a: '1.2', b: '2px', c: 'h2o'})).toEqual({a: 1.2, b: 2, c: NaN});
	});
});
