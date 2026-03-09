import {describe, it, expect} from 'vitest';

import {pluckKey} from './pluckKey';

describe('pluckKey', () => {
	it('should pluck the `key` property value from an array of objects', () => {
		expect(pluckKey([
			{key: 'John', value: 'Foo'},
			{key: 'Jane', value: 'Bar'}
		])).toEqual(['John', 'Jane']);
	});
});
