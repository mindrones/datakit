import {describe, it, expect} from 'vitest';

import {toFloatIsValidNumber} from './toFloatIsValidNumber';

function returnArgs(..._args: unknown[]) {
	// eslint-disable-next-line prefer-rest-params
	return arguments;
}

describe('toFloatIsValidNumber', () => {
	it('should return `true` if the input, parsed to float, is a valid number', () => {
		[[1], [1, 2], [1, 2, 3], '123', '123abc'].forEach(x => {
			expect(toFloatIsValidNumber(x)).toEqual(true);
		});
	});
	it('should return `false` if the input, parsed to float, is not a valid number', () => {
		[
			[],
			'',
			'foo',
			{a: 1},
			true,
			null,
			undefined,
			returnArgs(),
			returnArgs(1),
			returnArgs(1, 2),
			returnArgs(1, 2, 3),
		].forEach(x => {
			expect(toFloatIsValidNumber(x)).toEqual(false);
		});
	});
});
