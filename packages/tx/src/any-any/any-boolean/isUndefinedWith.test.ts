import {describe, it, expect} from 'vitest';

import {getValue, isUndefinedWith} from '@datakit/tx';

describe('isUndefinedWith', () => {
	const isValueUndefined = isUndefinedWith(getValue);

	it('should return true if the accessed value is undefined', () => {
		expect(isValueUndefined({key: 'a', value: undefined})).toEqual(true);
	});

	it('should return false if the accessed value is not undefined', () => {
		expect(isValueUndefined({key: 'a', value: null})).toEqual(false);
		expect(isValueUndefined({key: 'a', value: 1})).toEqual(false);
		expect(isValueUndefined({key: 'a', value: 'string'})).toEqual(false);
		expect(isValueUndefined({key: 'a', value: false})).toEqual(false);
		expect(isValueUndefined({key: 'a', value: 0})).toEqual(false);
		expect(isValueUndefined({key: 'a', value: []})).toEqual(false);
	});
});
