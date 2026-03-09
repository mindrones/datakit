import {describe, it, expect} from 'vitest';

import {isValidNumber} from './isValidNumber';

function returnArgs(..._args: unknown[]) {
	// eslint-disable-next-line prefer-rest-params
	return arguments;
}

describe('isValidNumber', () => {
	it('should return `true` if the input is a valid number', () => {
		[1, 1.2, Infinity].forEach(x => {
			expect(isValidNumber(x)).toEqual(true);
		});
	});
	it('should return `false` if the input is not a valid number', () => {
		[
			[],
			[123],
			[1, 2],
			{a: 1},
			'',
			'123',
			'123abc',
			'foo',
			true,
			null,
			undefined,
			NaN,
			returnArgs(),
			returnArgs(1),
			returnArgs(1, 2),
			returnArgs(1, 2, 3),
		].forEach(x => {
			expect(isValidNumber(x)).toEqual(false);
		});
	});
});
