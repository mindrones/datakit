import {describe, it, expect} from 'vitest';

import {getLength} from './getLength';

describe('getLength', () => {
	it('returns the length of a string', () => {
		expect(getLength('')).toEqual(0);
		expect(getLength('a')).toEqual(1);
		expect(getLength('abc')).toEqual(3);
	});
	it('returns the length of an array', () => {
		expect(getLength([])).toEqual(0);
		expect(getLength([1])).toEqual(1);
		expect(getLength([1, 2, 3])).toEqual(3);
	});
	it('returns the length of an arguments object', () => {
		// eslint-disable-next-line prefer-rest-params
		function returnArgs(..._args: unknown[]) { return arguments; }
		expect(getLength(returnArgs())).toEqual(0);
		expect(getLength(returnArgs(1))).toEqual(1);
		expect(getLength(returnArgs(1, 2))).toEqual(2);
	});
});
