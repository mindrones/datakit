import {describe, it, expect} from 'vitest';

import type {ObjKV} from '@datakit/types';

import {sortValueDesc} from './sortValueDesc';

describe('sortValueDesc', () => {
	it('should sort items by value descending', () => {
		const items: ObjKV<number>[] = [
			{key: 'a', value: 1},
			{key: 'b', value: 3},
			{key: 'c', value: 2},
		];
		expect(sortValueDesc(items)).toEqual([
			{key: 'b', value: 3},
			{key: 'c', value: 2},
			{key: 'a', value: 1},
		]);
	});
});
