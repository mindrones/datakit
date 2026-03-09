import {describe, it, expect} from 'vitest';

import {areSomeTruthy} from './areSomeTruthy';

describe('areSomeTruthy', () => {
	it('should return `true` if some elements of the provided array are truthy', () => {
		expect(areSomeTruthy([true, false])).toEqual(true);
		expect(areSomeTruthy([1, 0])).toEqual(true);
		expect(areSomeTruthy([0, false, []])).toEqual(true);
		expect(areSomeTruthy([0, false, [1, 2]])).toEqual(true);
		expect(areSomeTruthy([0, false, {}])).toEqual(true);
		expect(areSomeTruthy([0, false, {a: 1}])).toEqual(true);
		expect(areSomeTruthy([0, false, 'a'])).toEqual(true);
	});
	it('should return `false` for all-boolean false array', () => {
		expect(areSomeTruthy([false, false])).toEqual(false);
	});
	it('should return `false` for falsy non-boolean values (0, null, undefined, empty string)', () => {
		expect(areSomeTruthy([0, null, undefined])).toEqual(false);
		expect(areSomeTruthy([0, ''])).toEqual(false);
	});
});
