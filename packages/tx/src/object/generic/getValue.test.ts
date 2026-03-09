import {describe, it, expect} from 'vitest';

import {getValue} from './getValue';

describe('getValue', () => {
	it('should get `value`', () => {
		expect(getValue({key: 'foo', value: 'bar'})).toEqual('bar');
	});
});
