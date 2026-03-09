import {describe, it, expect} from 'vitest';

import {makeStartsWith} from './makeStartsWith';

describe('makeStartsWith', () => {
	it('should return a function expecting a base string and checking if it starts with the provided search string', () => {
		const startsWithHash = makeStartsWith('#');

		expect(startsWithHash('# this is a bash comment')).toEqual(true);
		expect(startsWithHash('This is not')).toEqual(false);
	});
});
