import {describe, it, expect} from 'vitest';

import {mergeWithMerge} from './mergeWithMerge';

describe('mergeWithMerge', () => {
	it('should merge 2 objects with same keys by merging correspondent values', () => {
		expect(mergeWithMerge({A: {a: 1}, B: {b: 1}}, {A: {b: 10}, B: {a: 10}})).toEqual(
			{A: {a: 1, b: 10}, B: {a: 10, b: 1}}
		);
	});
	it('should merge 2 objects with different keys by merging correspondent values', () => {
		expect(mergeWithMerge({A: {a: 1}}, {B: {b: 1}})).toEqual(
			{A: {a: 1}, B: {b: 1}}
		);
	});
});
