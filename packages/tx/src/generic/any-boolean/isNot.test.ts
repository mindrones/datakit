import {describe, it, expect} from 'vitest';

import {isNot} from './isNot';

describe('isNot', () => {
	it('should return true if the input number is different from the provided value', () => {
		const isNotTwo = isNot(2);

		expect(isNotTwo(3)).toEqual(true);
		expect(isNotTwo(2)).toEqual(false);
	});
	it('should return true if the input string is different from the provided value', () => {
		const isNotFoo = isNot('foo');

		expect(isNotFoo('boo')).toEqual(true);
		expect(isNotFoo('foo')).toEqual(false);
	});
});
