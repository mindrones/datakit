import {describe, it, expect} from 'vitest';

import {arrayMin} from './arrayMin';

describe('arrayMin', () => {
	it('should return the min of an array of numbers', () => {
		expect(arrayMin([-1, -2, 0, 1, 2])).toEqual(-2);
	});
});
