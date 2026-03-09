import {describe, it, expect} from 'vitest';

import {getValue, isNumberWith} from '@datakit/tx';

describe('isNumberWith', () => {
	const isValueNumber = isNumberWith(getValue);

	it('should return true if the accessed value is a number', () => {
		expect(isValueNumber({key: 'a', value: 1})).toEqual(true);
		expect(isValueNumber({key: 'a', value: 0})).toEqual(true);
		expect(isValueNumber({key: 'a', value: -5})).toEqual(true);
		expect(isValueNumber({key: 'a', value: 3.14})).toEqual(true);
		expect(isValueNumber({key: 'a', value: NaN})).toEqual(true);
	});

	it('should return false if the accessed value is not a number', () => {
		expect(isValueNumber({key: 'a', value: 'string'})).toEqual(false);
		expect(isValueNumber({key: 'a', value: null})).toEqual(false);
		expect(isValueNumber({key: 'a', value: undefined})).toEqual(false);
		expect(isValueNumber({key: 'a', value: [1]})).toEqual(false);
		expect(isValueNumber({key: 'a', value: {}})).toEqual(false);
	});
});
