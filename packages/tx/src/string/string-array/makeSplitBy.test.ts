import {describe, it, expect} from 'vitest';

import {makeSplitBy} from './makeSplitBy';

describe('makeSplitBy', () => {
	it('should return a function expecting a string to be split using the provided separator or regex', () => {
		const splitByDoubleDot = makeSplitBy('..');

		expect(splitByDoubleDot('aa...a..a.a.aa.....aa..')).toEqual(
			['aa', '.a', 'a.a.aa', '', '.aa', '']
		);
	});
});
