import {describe, it, expect} from 'vitest';

import {getValue, isStringWith} from '@datakit/tx';

describe('isStringWith', () => {
	const isValueString = isStringWith(getValue);

	it('should return true if the accessed value is a string', () => {
		expect(isValueString({key: 'a', value: 'hello'})).toEqual(true);
		expect(isValueString({key: 'a', value: ''})).toEqual(true);
		expect(isValueString({key: 'a', value: '123'})).toEqual(true);
	});

	it('should return false if the accessed value is not a string', () => {
		expect(isValueString({key: 'a', value: 1})).toEqual(false);
		expect(isValueString({key: 'a', value: null})).toEqual(false);
		expect(isValueString({key: 'a', value: undefined})).toEqual(false);
		expect(isValueString({key: 'a', value: []})).toEqual(false);
		expect(isValueString({key: 'a', value: {}})).toEqual(false);
	});
});
