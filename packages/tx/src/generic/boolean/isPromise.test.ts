import {describe, it, expect} from 'vitest';

import {isPromise} from './isPromise';

function returnArgs() {
	// eslint-disable-next-line prefer-rest-params
	return arguments;
}

describe('isPromise', () => {
	it('should return `true` if the input is a promise', () => {
		const promise = new Promise(resolve => {
			setTimeout(() => {
				resolve('foo');
			}, 300);
		});
		expect(isPromise(promise)).toEqual(true);
	});
	it('should return `false` if the input is not a promise', () => {
		expect(isPromise(true)).toEqual(false);
		expect(isPromise(1)).toEqual(false);
		expect(isPromise(NaN)).toEqual(false);
		expect(isPromise(null)).toEqual(false);
		expect(isPromise(undefined)).toEqual(false);
		expect(isPromise(Infinity)).toEqual(false);
		expect(isPromise({a: 1})).toEqual(false);
		expect(isPromise([1, 2])).toEqual(false);
		expect(isPromise('foo')).toEqual(false);
		expect(isPromise(returnArgs())).toEqual(false);
	});
});
