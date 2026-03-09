import {describe, it, expect} from 'vitest';

import {isNumber} from './isNumber';

function returnArgs() {
	// eslint-disable-next-line prefer-rest-params
	return arguments;
}

describe('isNumber', () => {
	it('should return `true` if the input is a number', () => {
		expect(isNumber(1)).toEqual(true);
		expect(isNumber(NaN)).toEqual(true);
		expect(isNumber(Infinity)).toEqual(true);
	});
	it('should return `false` if the input is not a number', () => {
		expect(isNumber(true)).toEqual(false);
		expect(isNumber([1, 2])).toEqual(false);
		expect(isNumber({a: 1})).toEqual(false);
		expect(isNumber('foo')).toEqual(false);
		expect(isNumber(returnArgs())).toEqual(false);
	});
});
