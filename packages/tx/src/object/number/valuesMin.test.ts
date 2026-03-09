import {describe, it, expect} from 'vitest';

import {valuesMin} from './valuesMin';

describe('valuesMin', () => {
	it('should return the min of the provided object values', () => {
		expect(valuesMin({a: -3, b: 2, c: 1})).toEqual(-3);
	});
});
