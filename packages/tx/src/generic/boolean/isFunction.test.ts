import {describe, it, expect} from 'vitest';

import {isFunction} from './isFunction';

function returnArgs() {
	// eslint-disable-next-line prefer-rest-params
	return arguments;
}

describe('isFunction', () => {
	it('should return `true` if the input is a function', () => {
		const makeFunc = (n: number) => (x: number) => x + n;
		expect(isFunction(() => 2)).toEqual(true);
		expect(isFunction(makeFunc(3))).toEqual(true);
	});
	it('should return `false` if the input is not a function', () => {
		expect(isFunction(1)).toEqual(false);
		expect(isFunction(NaN)).toEqual(false);
		expect(isFunction(Infinity)).toEqual(false);
		expect(isFunction([1, 2])).toEqual(false);
		expect(isFunction({a: 1})).toEqual(false);
		expect(isFunction('foo')).toEqual(false);
		expect(isFunction(returnArgs())).toEqual(false);
	});
});
