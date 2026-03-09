import {describe, it, expect} from 'vitest';

import {getValue, isNotNullWith} from '@datakit/tx';

describe('isNotNullWith', () => {
	const isValueNotNull = isNotNullWith(getValue);

	it('should return true if the accessed value is not null', () => {
		expect(isValueNotNull({key: 'a', value: 1})).toEqual(true);
		expect(isValueNotNull({key: 'a', value: 'string'})).toEqual(true);
		expect(isValueNotNull({key: 'a', value: undefined})).toEqual(true);
		expect(isValueNotNull({key: 'a', value: false})).toEqual(true);
		expect(isValueNotNull({key: 'a', value: 0})).toEqual(true);
	});

	it('should return false if the accessed value is null', () => {
		expect(isValueNotNull({key: 'a', value: null})).toEqual(false);
	});
});
