import {describe, it, expect} from 'vitest';

import {pickIfTruthy} from './pickIfTruthy';

describe('pickIfTruthy', () => {
	it('should return a copy of the object without falsy values', () => {
		expect(pickIfTruthy({a: true, b: true, c: false})).toEqual({a: true, b: true});
		expect(pickIfTruthy({a: 1, b: 0, c: false})).toEqual({a: 1});
		expect(pickIfTruthy({a: [1, 2], b: {a: 1}, c: false})).toEqual({a: [1, 2], b: {a: 1}});
	});
});
