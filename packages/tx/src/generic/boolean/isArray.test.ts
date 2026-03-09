import {describe, it, expect} from 'vitest';

import {isArray} from './isArray';

function returnArgs() {
	// eslint-disable-next-line prefer-rest-params
	return arguments;
}

describe('isArray', () => {
	it('should return `true` if the input is an array', () => {
		expect(isArray([])).toEqual(true);
		expect(isArray([1, 2])).toEqual(true);
	});
	it('should return `false` if the input is not an array', () => {
		expect(isArray(true)).toEqual(false);
		expect(isArray(1)).toEqual(false);
		expect(isArray(NaN)).toEqual(false);
		expect(isArray(null)).toEqual(false);
		expect(isArray(undefined)).toEqual(false);
		expect(isArray(Infinity)).toEqual(false);
		expect(isArray({a: 1})).toEqual(false);
		expect(isArray('foo')).toEqual(false);
		expect(isArray(returnArgs())).toEqual(false);
	});
});
