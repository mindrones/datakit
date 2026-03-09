import {describe, it, expect} from 'vitest';

import {isNotNil} from './isNotNil';

function returnArgs() {
	// eslint-disable-next-line prefer-rest-params
	return arguments;
}

describe('isNotNil', () => {
	it('should return `true` if the input is not undefined or null', () => {
		expect(isNotNil(1)).toEqual(true);
		expect(isNotNil(Infinity)).toEqual(true);
		expect(isNotNil('123')).toEqual(true);
		expect(isNotNil('123px')).toEqual(true);
		expect(isNotNil([1, 2])).toEqual(true);
		expect(isNotNil({a: 1})).toEqual(true);
		expect(isNotNil(true)).toEqual(true);
		expect(isNotNil(false)).toEqual(true);
		expect(isNotNil(returnArgs())).toEqual(true);
		expect(isNotNil(NaN)).toEqual(true);
	});
	it('should return `false` if the input is undefined or null', () => {
		expect(isNotNil(undefined)).toEqual(false);
		expect(isNotNil(null)).toEqual(false);
	});
});
