import {describe, it, expect} from 'vitest';

import {concatValues} from './concatValues';

describe('concatValues', () => {
	it('should concatenate the values of the provided objects', () => {
		expect(concatValues({a: [1, 2, 3], b: [4, 5, 6]})).toEqual([1, 2, 3, 4, 5, 6]);
	});
});
