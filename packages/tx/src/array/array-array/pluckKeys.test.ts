import {describe, it, expect} from 'vitest';

import {pluckKeys} from './pluckKeys';

describe('pluckKeys', () => {
	it('should return a function plucking the provided keys from the expected array', () => {
		const select = pluckKeys(['a', 'k']);
		const actual = select([
			{a: 1, b: 2, c: 3, k: 4},
			{a: 5, k: 6, m: 7, b: 8},
		]);
		expect(actual).toEqual([{a: 1, k: 4}, {a: 5, k: 6}]);
	});
	it('should return a function plucking the provided keys - missing keys', () => {
		const select = pluckKeys(['a', 'k']);
		const actual = select([
			{a: 1, b: 2, c: 3},
			{k: 6, m: 7, b: 8},
		]);
		expect(actual).toEqual([{a: 1}, {k: 6}]);
	});
});
