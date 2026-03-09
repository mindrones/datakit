import {describe, it, expect} from 'vitest';

import {getValue, isArrayWith} from '@datakit/tx';

describe('isArrayWith', () => {
	const isValueArray = isArrayWith(getValue);

	it('should return true if the accessed value is an array', () => {
		expect(isValueArray({key: 'a', value: [1, 2]})).toEqual(true);
		expect(isValueArray({key: 'a', value: []})).toEqual(true);
		expect(isValueArray({key: 'a', value: ['x', 'y']})).toEqual(true);
	});

	it('should return false if the accessed value is not an array', () => {
		expect(isValueArray({key: 'a', value: 1})).toEqual(false);
		expect(isValueArray({key: 'a', value: 'string'})).toEqual(false);
		expect(isValueArray({key: 'a', value: {a: 1}})).toEqual(false);
		expect(isValueArray({key: 'a', value: null})).toEqual(false);
		expect(isValueArray({key: 'a', value: undefined})).toEqual(false);
	});
});
