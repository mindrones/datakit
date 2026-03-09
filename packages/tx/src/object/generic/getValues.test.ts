import {describe, it, expect} from 'vitest';

import {getValues} from './getValues';

describe('getValues', () => {
	it('should get `values`', () => {
		expect(getValues({key: 'foo', values: [0, 1, 2, 3]})).toEqual([0, 1, 2, 3]);
	});
});
