import {describe, it, expect} from 'vitest';

import {makeSplitStringBy} from './makeSplitStringBy';

describe('makeSplitStringBy', () => {
	it('should return a function expecting a separator or regex to split the provided string', () => {
		const splitStringBy = makeSplitStringBy('a.b-c,d:e');

		expect(splitStringBy(':')).toEqual(['a.b-c,d', 'e']);
		expect(splitStringBy('-')).toEqual(['a.b', 'c,d:e']);
	});
});
