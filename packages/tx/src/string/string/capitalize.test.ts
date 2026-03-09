import {describe, it, expect} from 'vitest';

import {capitalize} from './capitalize';

describe('capitalize', () => {
	it('capitalises the input string', () => {
		expect(capitalize('hello')).toEqual('Hello');
	});
});
