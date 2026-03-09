import {describe, it, expect} from 'vitest';

import {makeKeyedFalse} from './makeKeyedFalse';

describe('makeKeyedFalse', () => {
	it('should return an object with the provided array elements as keys and all values equal to false', () => {
		expect(makeKeyedFalse(['a', 'b'])).toEqual({a: false, b: false});
	});
});
