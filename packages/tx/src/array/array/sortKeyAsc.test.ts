import {describe, it, expect} from 'vitest';

import type {ObjKV} from '@datakit/types';

import {sortKeyAsc} from './sortKeyAsc';

describe('sortKeyAsc', () => {
	it('should sort items by key ascending', () => {
		const items: ObjKV<number>[] = [
			{key: 'b', value: 1},
			{key: 'a', value: 2},
			{key: 'c', value: 3},
		];
		expect(sortKeyAsc(items)).toEqual([
			{key: 'a', value: 2},
			{key: 'b', value: 1},
			{key: 'c', value: 3},
		]);
	});
});
