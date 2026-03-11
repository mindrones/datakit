import {describe, it, expect} from 'vitest';

import type {ObjKV} from '@datakit/types';

import {sortKeyDesc} from './sortKeyDesc';

describe('sortKeyDesc', () => {
	it('should sort items by key descending', () => {
		const items: ObjKV<number>[] = [
			{key: 'a', value: 1},
			{key: 'c', value: 2},
			{key: 'b', value: 3},
		];
		expect(sortKeyDesc(items)).toEqual([
			{key: 'c', value: 2},
			{key: 'b', value: 3},
			{key: 'a', value: 1},
		]);
	});
});
