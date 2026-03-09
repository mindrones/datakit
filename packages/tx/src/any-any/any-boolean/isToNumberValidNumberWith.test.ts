import {describe, it, expect} from 'vitest';

import {getValue, isToNumberValidNumberWith} from '@datakit/tx';

describe('isToNumberValidNumberWith', () => {
	const isValueToNumberValidNumber = isToNumberValidNumberWith(getValue);

	it('should return true if the accessed value can be turned into a valid number via Number()', () => {
		expect(isValueToNumberValidNumber({key: 'a', value: 1})).toEqual(true);
		expect(isValueToNumberValidNumber({key: 'a', value: '123'})).toEqual(true);
		expect(isValueToNumberValidNumber({key: 'a', value: '3.14'})).toEqual(true);
		expect(isValueToNumberValidNumber({key: 'a', value: ''})).toEqual(true);
		expect(isValueToNumberValidNumber({key: 'a', value: true})).toEqual(true);
		expect(isValueToNumberValidNumber({key: 'a', value: null})).toEqual(true);
	});

	it('should return false if the accessed value cannot be turned into a valid number via Number()', () => {
		expect(isValueToNumberValidNumber({key: 'a', value: '123px'})).toEqual(false);
		expect(isValueToNumberValidNumber({key: 'a', value: 'hello'})).toEqual(false);
		expect(isValueToNumberValidNumber({key: 'a', value: undefined})).toEqual(false);
		expect(isValueToNumberValidNumber({key: 'a', value: {}})).toEqual(false);
	});
});
