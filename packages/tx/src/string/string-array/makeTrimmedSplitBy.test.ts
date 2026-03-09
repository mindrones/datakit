import {describe, it, expect} from 'vitest';

import {makeTrimmedSplitBy} from './makeTrimmedSplitBy';

describe('makeTrimmedSplitBy', () => {
	it('should return a function that splits the expected string and trims all the elements of the returned array', () => {
		const trimSplitByDoubleDot = makeTrimmedSplitBy('..');

		expect(trimSplitByDoubleDot('  aa ..\ta\n..a')).toEqual(
			['aa', 'a', 'a']
		);
		expect(trimSplitByDoubleDot('  aa ...\na..a.a.aa\n.....\taa..\n')).toEqual(
			['aa', '.\na', 'a.a.aa', '', '.\taa', '']
		);
	});
});
