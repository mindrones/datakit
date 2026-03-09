import {describe, it, expect} from 'vitest';

import {getValue, isToFloatValidNumberWith} from '@datakit/tx';

describe('isToFloatValidNumberWith', () => {
	const isValueToFloatValidNumber = isToFloatValidNumberWith(getValue);

	it('should return true if the accessed value can be turned into a valid number via parseFloat()', () => {
		expect(isValueToFloatValidNumber({key: 'a', value: 1})).toEqual(true);
		expect(isValueToFloatValidNumber({key: 'a', value: '3.14'})).toEqual(true);
		expect(isValueToFloatValidNumber({key: 'a', value: [1]})).toEqual(true);
		expect(isValueToFloatValidNumber({key: 'a', value: '42px'})).toEqual(true);
	});

	it('should return false if the accessed value cannot be turned into a valid number via parseFloat()', () => {
		expect(isValueToFloatValidNumber({key: 'a', value: []})).toEqual(false);
		expect(isValueToFloatValidNumber({key: 'a', value: 'hello'})).toEqual(false);
		expect(isValueToFloatValidNumber({key: 'a', value: null})).toEqual(false);
		expect(isValueToFloatValidNumber({key: 'a', value: undefined})).toEqual(false);
		expect(isValueToFloatValidNumber({key: 'a', value: {}})).toEqual(false);
	});
});
