import {describe, it, expect} from 'vitest';

import {isString} from './isString';

function returnArgs() {
	// eslint-disable-next-line prefer-rest-params
	return arguments;
}

describe('isString', () => {
	it('should return `true` if the input is a string', () => {
		expect(isString('')).toEqual(true);
		expect(isString('foo')).toEqual(true);
	});
	it('should return `false` if the input is not a string', () => {
		expect(isString(true)).toEqual(false);
		expect(isString(1)).toEqual(false);
		expect(isString(NaN)).toEqual(false);
		expect(isString(Infinity)).toEqual(false);
		expect(isString([1, 2])).toEqual(false);
		expect(isString({a: 1})).toEqual(false);
		expect(isString(returnArgs())).toEqual(false);
	});
});
