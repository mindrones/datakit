import {describe, it, expect} from 'vitest';

import {isArguments} from './isArguments';

function returnArgs() {
	// eslint-disable-next-line prefer-rest-params
	return arguments;
}

describe('isArguments', () => {
	it('should return `true` if the input is an arguments list', () => {
		expect(isArguments(returnArgs())).toEqual(true);
	});
	it('should return `false` if the input is not an arguments list', () => {
		expect(isArguments([])).toEqual(false);
		expect(isArguments([1, 2])).toEqual(false);
		expect(isArguments(true)).toEqual(false);
		expect(isArguments(1)).toEqual(false);
		expect(isArguments(null)).toEqual(false);
		expect(isArguments(undefined)).toEqual(false);
		expect(isArguments(NaN)).toEqual(false);
		expect(isArguments(Infinity)).toEqual(false);
		expect(isArguments({a: 1})).toEqual(false);
		expect(isArguments('foo')).toEqual(false);
	});
});
