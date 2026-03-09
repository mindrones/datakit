import {describe, it, expect} from 'vitest';

import {getKey} from './getKey';

describe('getKey', () => {
	it('should get `key`', () => {
		expect(getKey({key: 'foo', value: 'bar'})).toEqual('foo');
	});
});
