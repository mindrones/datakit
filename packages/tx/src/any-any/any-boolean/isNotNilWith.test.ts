import {describe, it, expect} from 'vitest';

import {getValue, isNotNilWith} from '@datakit/tx';

describe('isNotNilWith', () => {
	const isValueNotNil = isNotNilWith(getValue);

	it('should return true if the accessed value is not null or undefined', () => {
		expect(isValueNotNil({key: 'a', value: 1})).toEqual(true);
		expect(isValueNotNil({key: 'a', value: 'string'})).toEqual(true);
		expect(isValueNotNil({key: 'a', value: false})).toEqual(true);
		expect(isValueNotNil({key: 'a', value: []})).toEqual(true);
		expect(isValueNotNil({key: 'a', value: {}})).toEqual(true);
		expect(isValueNotNil({key: 'a', value: 0})).toEqual(true);
	});

	it('should return false if the accessed value is null', () => {
		expect(isValueNotNil({key: 'a', value: null})).toEqual(false);
	});

	it('should return false if the accessed value is undefined', () => {
		expect(isValueNotNil({key: 'a', value: undefined})).toEqual(false);
	});
});
