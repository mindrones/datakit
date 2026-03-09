import {describe, it, expect} from 'vitest';

import {makeKeyedZeroes} from './makeKeyedZeroes';

describe('makeKeyedZeroes', () => {
	it('should return an object with the provided array elements as keys and all values equal to zero', () => {
		expect(makeKeyedZeroes(['a', 'b'])).toEqual({a: 0, b: 0});
		expect(makeKeyedZeroes([1, 2])).toEqual({'1': 0, '2': 0});
	});
});
