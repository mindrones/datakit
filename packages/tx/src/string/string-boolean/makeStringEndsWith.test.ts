import {describe, it, expect} from 'vitest';

import {makeStringEndsWith} from './makeStringEndsWith';

describe('makeStringEndsWith', () => {
	it('should return a function expecting a search string and checking if the provided base string ends with the search string', () => {
		const stringEndsWith = makeStringEndsWith('Hi!');

		expect(stringEndsWith('!')).toEqual(true);
		expect(stringEndsWith('?')).toEqual(false);
	});
});
