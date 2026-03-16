import {describe, it, expect} from 'vitest';
import * as _ from 'lamb';

import {mergeWith} from './mergeWith';

describe('mergeWith', () => {
	it('should return a function expecting two objects to merge using the provided merge function', () => {
		const mergeWithSubtract = mergeWith(_.subtract as (a: number, b: number) => number);

		const merged = mergeWithSubtract(
			{a: 8, b: 3},
			{a: 5, b: 2, c: 7}
		);
		const expected = {a: 3, b: 1, c: 7};

		expect(merged).toEqual(expected);
	});
	it('should not call the merge function for keys exclusive to one object — they pass through unchanged', () => {
		const calls: [number, number][] = [];
		const trackingFn = (a: number, b: number) => { calls.push([a, b]); return a + b; };

		const merged = mergeWith(trackingFn)({a: 1, x: 9}, {a: 5});

		expect(merged).toEqual({a: 6, x: 9});
		expect(calls).toEqual([[1, 5]]); // fn called only for shared key 'a'
	});
});
