import {describe, it, expect} from 'vitest';

import {negate} from './negate';

describe('negate', () => {
	it('should return `false` if the input is truthy', () => {
		[true, 1, 'a', [], {}].forEach(x => {
			expect(negate(x)).toEqual(false);
		});
	});
	it('should return `true` if the input is falsy', () => {
		[false, 0, '', null, NaN, undefined].forEach(x => {
			expect(negate(x)).toEqual(true);
		});
	});
});
