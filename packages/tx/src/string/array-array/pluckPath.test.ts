import {describe, it, expect} from 'vitest';

import {pluckPath} from './pluckPath';

describe('pluckPath', () => {
	const getABs = pluckPath('a.b');

	it('should return a function expecting an array of objects and plucking the provided array with the input path', () => {
		expect(
			getABs([{a: {b: -1, label: 'foo'}}, {a: {b: 4, label: 'bar'}}])
		).toEqual([-1, 4]);
	});
	it('should return `undefined` for objects where the path is not defined', () => {
		expect(
			getABs([{a: {label: 'foo'}}, {a: {b: 2}}])
		).toEqual([undefined, 2]);
	});
	it('should work with empty arrays', () => {
		expect(getABs([])).toEqual([]);
	});
});
