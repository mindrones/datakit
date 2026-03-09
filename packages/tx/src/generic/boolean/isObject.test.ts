import {describe, it, expect} from 'vitest';

import {isObject} from './isObject';

function returnArgs() {
	// eslint-disable-next-line prefer-rest-params
	return arguments;
}

describe('isObject', () => {
	it('should return `true` if the input is a plain object', () => {
		expect(isObject({})).toEqual(true);
		expect(isObject({a: 1})).toEqual(true);
	});
	it('should return `false` if the input is not a plain object', () => {
		expect(isObject(true)).toEqual(false);
		expect(isObject(1)).toEqual(false);
		expect(isObject(null)).toEqual(false);
		expect(isObject(undefined)).toEqual(false);
		expect(isObject(NaN)).toEqual(false);
		expect(isObject(Infinity)).toEqual(false);
		expect(isObject([1, 2])).toEqual(false);
		expect(isObject('foo')).toEqual(false);
		expect(isObject(returnArgs())).toEqual(false);
	});
});
