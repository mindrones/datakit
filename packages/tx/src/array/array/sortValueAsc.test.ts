import {describe, it, expect} from 'vitest';

import type {ObjKV} from '@datakit/types';

import {sortValueAsc} from './sortValueAsc';

describe('sortValueAsc', () => {
	it('should sort items by value ascending', () => {
		const items: ObjKV<number>[] = [
			{key: 'a', value: 3},
			{key: 'b', value: 1},
			{key: 'c', value: 2},
		];
		expect(sortValueAsc(items)).toEqual([
			{key: 'b', value: 1},
			{key: 'c', value: 2},
			{key: 'a', value: 3},
		]);
	});
});
