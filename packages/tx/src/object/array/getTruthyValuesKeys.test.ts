import {describe, it, expect} from 'vitest';

import {getTruthyValuesKeys} from './getTruthyValuesKeys';

describe('getTruthyValuesKeys', () => {
	it('should return the keys with a true value', () => {
		expect(getTruthyValuesKeys({a: true, b: true, c: false})).toEqual(['a', 'b']);
	});
	it('should return the keys with a truthy value', () => {
		expect(getTruthyValuesKeys({a: 1, b: 0, c: false})).toEqual(['a']);
		expect(getTruthyValuesKeys({a: [1, 2], b: {a: 1}, c: false})).toEqual(['a', 'b']);
	});
});
