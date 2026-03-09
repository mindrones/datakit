import {describe, it, expect} from 'vitest';

import {pluckValue} from './pluckValue';

describe('pluckValue', () => {
	it('should pluck the `value` property value from an array of objects', () => {
		expect(pluckValue([
			{key: 'John', value: 'Foo'},
			{key: 'Jane', value: 'Bar'}
		])).toEqual(['Foo', 'Bar']);
	});
});
