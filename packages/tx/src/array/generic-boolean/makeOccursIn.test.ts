import {describe, it, expect} from 'vitest';

import {makeOccursIn} from './makeOccursIn';

describe('makeOccursIn', () => {
	it('return a function returning true if the passed array is found in the provided array', () => {
		const isContained = makeOccursIn([
			[1, 2, 3], [1, 2, 3, 4], [5, 6, 7, 6, 5]
		]);

		expect(isContained([1, 2, 3])).toEqual(true);
		expect(isContained([1, 2])).toEqual(false);
	});
	it('return a function returning true if the passed object is found in the provided array', () => {
		const isContained = makeOccursIn([
			{a: 1}, {a: 2}, {a: {b: {c: 3}}}, {b: 1}
		]);

		expect(isContained({a: {b: {c: 3}}})).toEqual(true);
		expect(isContained({a: 3})).toEqual(false);
	});
});
