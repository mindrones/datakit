import {describe, it, expect} from 'vitest';

import {mergeObjects} from './mergeObjects';

describe('mergeObjects', () => {
	it('should merge all the objects in the provided array', () => {
		expect(mergeObjects([{a: 1}, {a: 6, b: -1}, {b: 1}])).toEqual({a: 6, b: 1});
		expect(mergeObjects([{b: 1}, {a: 6, b: -1}, {a: 1}])).toEqual({a: 1, b: -1});
	});
});
