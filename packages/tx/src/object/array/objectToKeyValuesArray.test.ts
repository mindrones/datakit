import {describe, it, expect} from 'vitest';

import {objectToKeyValuesArray} from './objectToKeyValuesArray';

describe('objectToKeyValuesArray', () => {
	it('should return an array of {key, values} objects from an object', () => {
		expect(objectToKeyValuesArray({k1: ['a', 'b'], k2: ['c', 'd']})).toEqual([
			{key: 'k1', values: ['a', 'b']},
			{key: 'k2', values: ['c', 'd']}
		]);
	});
});
