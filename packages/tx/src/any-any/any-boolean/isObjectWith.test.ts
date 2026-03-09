import {describe, it, expect} from 'vitest';

import {getValue, isObjectWith} from '@datakit/tx';

describe('isObjectWith', () => {
	const isValueObject = isObjectWith(getValue);

	it('should return true if the accessed value is an object', () => {
		expect(isValueObject({key: 'a', value: {a: 1}})).toEqual(true);
		expect(isValueObject({key: 'a', value: {}})).toEqual(true);
	});

	it('should return false if the accessed value is not an object', () => {
		expect(isValueObject({key: 'a', value: 'string'})).toEqual(false);
		expect(isValueObject({key: 'a', value: 1})).toEqual(false);
		expect(isValueObject({key: 'a', value: null})).toEqual(false);
		expect(isValueObject({key: 'a', value: undefined})).toEqual(false);
		expect(isValueObject({key: 'a', value: [1, 2]})).toEqual(false);
	});
});
