import {describe, it, expect} from 'vitest';

import {isNotNull} from './isNotNull';

function returnArgs() {
	// eslint-disable-next-line prefer-rest-params
	return arguments;
}

describe('isNotNull', () => {
	it('should return `true` if the input is not null', () => {
		expect(isNotNull(1)).toEqual(true);
		expect(isNotNull(Infinity)).toEqual(true);
		expect(isNotNull('123')).toEqual(true);
		expect(isNotNull('123px')).toEqual(true);
		expect(isNotNull([1, 2])).toEqual(true);
		expect(isNotNull({a: 1})).toEqual(true);
		expect(isNotNull(true)).toEqual(true);
		expect(isNotNull(false)).toEqual(true);
		expect(isNotNull(returnArgs())).toEqual(true);
		expect(isNotNull(NaN)).toEqual(true);
		expect(isNotNull(undefined)).toEqual(true);
	});
	it('should return `false` if the input is null', () => {
		expect(isNotNull(null)).toEqual(false);
	});
});
