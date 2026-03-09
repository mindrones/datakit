import {describe, it, expect} from 'vitest';

import {getValue, isNilWith} from '@datakit/tx';

describe('isNilWith', () => {
	const isValueNil = isNilWith(getValue);

	it('should return true if the accessed value is null', () => {
		expect(isValueNil({key: 'a', value: null})).toEqual(true);
	});

	it('should return true if the accessed value is undefined', () => {
		expect(isValueNil({key: 'a', value: undefined})).toEqual(true);
	});

	it('should return false if the accessed value is not null or undefined', () => {
		expect(isValueNil({key: 'a', value: 1})).toEqual(false);
		expect(isValueNil({key: 'a', value: 'string'})).toEqual(false);
		expect(isValueNil({key: 'a', value: false})).toEqual(false);
		expect(isValueNil({key: 'a', value: []})).toEqual(false);
		expect(isValueNil({key: 'a', value: {}})).toEqual(false);
	});
});
