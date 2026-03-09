import {describe, it, expect} from 'vitest';

import {objectToKeyValueArray} from './objectToKeyValueArray';

describe('objectToKeyValueArray', () => {
	it('should return an array of {key, value} objects from an object', () => {
		expect(objectToKeyValueArray({k1: 'v1', k2: 'v2'})).toEqual([
			{key: 'k1', value: 'v1'},
			{key: 'k2', value: 'v2'}
		]);
	});
});
