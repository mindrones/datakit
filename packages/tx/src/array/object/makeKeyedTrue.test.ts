import {describe, it, expect} from 'vitest';

import {makeKeyedTrue} from './makeKeyedTrue';

describe('makeKeyedTrue', () => {
	it('should return an object with the provided array elements as keys and all values equal to true', () => {
		expect(makeKeyedTrue(['a', 'b'])).toEqual({a: true, b: true});
	});
});
