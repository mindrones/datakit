import {describe, it, expect} from 'vitest';

import {getId} from './getId';

describe('getId', () => {
	it('should get `id`', () => {
		expect(getId({id: 'foo', name: 'bar'})).toEqual('foo');
	});
});
