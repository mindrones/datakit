import {describe, it, expect} from 'vitest';

import {isNotPathValue} from './isNotPathValue';

describe('isNotPathValue', () => {
	it('should return a predicate expecting an object and returning true if the value at the provided path is not the same as the provided value', () => {
		const isNotDefaultStatus = isNotPathValue(['item.status', 'default']);

		expect(isNotDefaultStatus({item: {status: 'active'}, id: 123})).toEqual(true);
		expect(isNotDefaultStatus({item: {status: 'default'}, id: 456})).toEqual(false);
	});
});
