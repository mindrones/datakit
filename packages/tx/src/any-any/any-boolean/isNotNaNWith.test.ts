import {describe, it, expect} from 'vitest';

import {getValue, isNotNaNWith} from '@datakit/tx';

describe('isNotNaNWith', () => {
	const isValueNotNaN = isNotNaNWith(getValue);

	it('should return true if the accessed value is not NaN', () => {
		expect(isValueNotNaN({key: 'a', value: 1})).toEqual(true);
		expect(isValueNotNaN({key: 'a', value: 0})).toEqual(true);
		expect(isValueNotNaN({key: 'a', value: -5})).toEqual(true);
		expect(isValueNotNaN({key: 'a', value: null})).toEqual(true);
		expect(isValueNotNaN({key: 'a', value: 'string'})).toEqual(true);
		expect(isValueNotNaN({key: 'a', value: undefined})).toEqual(true);
	});

	it('should return false only for the actual NaN value', () => {
		expect(isValueNotNaN({key: 'a', value: NaN})).toEqual(false);
	});
});
