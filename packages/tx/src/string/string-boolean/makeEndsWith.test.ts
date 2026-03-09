import {describe, it, expect} from 'vitest';

import {makeEndsWith} from './makeEndsWith';

describe('makeEndsWith', () => {
	it('should return a function expecting a base string and checking if it ends with the provided search string', () => {
		const endsWithExclamationMark = makeEndsWith('!');

		expect(endsWithExclamationMark('Hi!')).toEqual(true);
		expect(endsWithExclamationMark('Who?')).toEqual(false);
	});
});
