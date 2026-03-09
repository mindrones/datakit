import {describe, it, expect} from 'vitest';

import {makePrefixed, renameKeysWith} from '@datakit/tx';

describe('renameKeysWith', () => {
	it('should return a function expecting an object and returning a new object with keys renamed with the provided function', () => {
		const rename = renameKeysWith(makePrefixed('--'));

		expect(rename({foo: 1, bar: 2, 'another-var': 3})).toEqual({
			'--foo': 1,
			'--bar': 2,
			'--another-var': 3,
		});
	});
});
