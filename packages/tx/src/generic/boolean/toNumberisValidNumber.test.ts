import {describe, it, expect} from 'vitest';

import {toNumberisValidNumber} from './toNumberisValidNumber';

function returnArgs(..._args: unknown[]) {
	// eslint-disable-next-line prefer-rest-params
	return arguments;
}

describe('toNumberisValidNumber', () => {
	it('should return `true` if the input, converted to Number, is indeed a number', () => {
		[[], [2], '', '123', null, true].forEach(x => {
			expect(toNumberisValidNumber(x)).toEqual(true);
		});
	});
	it('should return `false` if the input, converted to Number, is not a number', () => {
		[
			{a: 1},
			[1, 2],
			'123abc',
			'foo',
			undefined,
			returnArgs(),
			returnArgs(1),
			returnArgs(1, 2),
			returnArgs(1, 2, 3),
		].forEach(x => {
			expect(toNumberisValidNumber(x)).toEqual(false);
		});
	});
});
