import {describe, it, expect} from 'vitest';

import {getValue, isValidNumberWith} from '@datakit/tx';

describe('isValidNumberWith', () => {
	const isValueValidNumber = isValidNumberWith(getValue);

	it('should return true if the accessed value is a valid number (not NaN)', () => {
		expect(isValueValidNumber({key: 'a', value: 1})).toEqual(true);
		expect(isValueValidNumber({key: 'a', value: 0})).toEqual(true);
		expect(isValueValidNumber({key: 'a', value: -5})).toEqual(true);
		expect(isValueValidNumber({key: 'a', value: 3.14})).toEqual(true);
		expect(isValueValidNumber({key: 'a', value: Infinity})).toEqual(true);
	});

	it('should return false if the accessed value is NaN', () => {
		expect(isValueValidNumber({key: 'a', value: NaN})).toEqual(false);
	});

	it('should return false if the accessed value is not a number', () => {
		expect(isValueValidNumber({key: 'a', value: 'string'})).toEqual(false);
		expect(isValueValidNumber({key: 'a', value: null})).toEqual(false);
		expect(isValueValidNumber({key: 'a', value: undefined})).toEqual(false);
		expect(isValueValidNumber({key: 'a', value: [1]})).toEqual(false);
	});
});
