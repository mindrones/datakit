import {describe, it, expect} from 'vitest';

import {makeIsIncluded} from './makeIsIncluded';

describe('makeIsIncluded', () => {
	it('return a function returning true if the passed primitive value is found - number', () => {
		const isIncluded = makeIsIncluded([1, 2, 3]);

		expect(isIncluded(1)).toEqual(true);
		expect(isIncluded(4)).toEqual(false);
	});
	it('return a function returning true if the passed primitive value is found - string', () => {
		const isIncluded = makeIsIncluded(['a', 'q', 'w']);

		expect(isIncluded('a')).toEqual(true);
		expect(isIncluded('r')).toEqual(false);
	});
});
