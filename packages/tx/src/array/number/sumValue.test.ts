import {describe, it, expect} from 'vitest';

import type {ObjKV} from '@datakit/types';

import {sumValue} from './sumValue';

describe('sumValue', () => {
	it('should sum the value properties of key-value objects', () => {
		const items: ObjKV<number>[] = [
			{key: 'a', value: 1},
			{key: 'b', value: 2},
			{key: 'c', value: 3},
		];
		expect(sumValue(items)).toBe(6);
	});
	it('should return 0 for an empty array', () => {
		expect(sumValue([])).toBe(0);
	});
});
