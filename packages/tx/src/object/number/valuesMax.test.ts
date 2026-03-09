import {describe, it, expect} from 'vitest';

import {valuesMax} from './valuesMax';

describe('valuesMax', () => {
	it('should return the max of the provided object values', () => {
		expect(valuesMax({a: -3, b: 2, c: 1})).toEqual(2);
	});
});
