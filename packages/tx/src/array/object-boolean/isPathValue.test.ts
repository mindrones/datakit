import {describe, it, expect} from 'vitest';

import {isPathValue} from './isPathValue';

describe('isPathValue', () => {
	it('should return a predicate expecting an object and returning true if the value at the provided path is the same as the provided value', () => {
		const isDefaultStatus = isPathValue(['item.status', 'default']);

		expect(isDefaultStatus({item: {status: 'active'}, id: 123})).toEqual(false);
		expect(isDefaultStatus({item: {status: 'default'}, id: 456})).toEqual(true);
	});
});
