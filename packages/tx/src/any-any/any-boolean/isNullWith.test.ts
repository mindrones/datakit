import {describe, it, expect} from 'vitest';

import {getValue, isNullWith} from '@datakit/tx';

describe('isNullWith', () => {
	const isValueNull = isNullWith(getValue);

	it('should return true if the accessed value is null', () => {
		expect(isValueNull({key: 'a', value: null})).toEqual(true);
	});

	it('should return false if the accessed value is not null', () => {
		expect(isValueNull({key: 'a', value: undefined})).toEqual(false);
		expect(isValueNull({key: 'a', value: 1})).toEqual(false);
		expect(isValueNull({key: 'a', value: 'string'})).toEqual(false);
		expect(isValueNull({key: 'a', value: false})).toEqual(false);
		expect(isValueNull({key: 'a', value: 0})).toEqual(false);
	});
});
