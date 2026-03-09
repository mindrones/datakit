import {describe, it, expect} from 'vitest';

import {arrayMax} from './arrayMax';

describe('arrayMax', () => {
	it('should return the max of the numbers in the provided array', () => {
		expect(arrayMax([-1, -2, 0, 1, 2])).toEqual(2);
	});
});
