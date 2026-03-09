import {describe, it, expect} from 'vitest';

import {makeStringStartsWith} from './makeStringStartsWith';

describe('makeStringStartsWith', () => {
	it('should return a function expecting a search string and checking if the provided base string starts with the search string', () => {
		const stringStartsWith = makeStringStartsWith('Hi!');

		expect(stringStartsWith('H')).toEqual(true);
		expect(stringStartsWith('h')).toEqual(false);
	});
});
