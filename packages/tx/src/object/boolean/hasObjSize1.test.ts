import {describe, it, expect} from 'vitest';

import {hasObjSize1} from './hasObjSize1';

describe('hasObjSize1', () => {
	it('should return `false` if the object is empty', () => {
		expect(hasObjSize1({})).toEqual(false);
	});
	it('should return `true` if the object has size 1', () => {
		expect(hasObjSize1({a: 1})).toEqual(true);
	});
	it('should return `false` if the object is longer than 1', () => {
		expect(hasObjSize1({a: 1, b: 2})).toEqual(false);
	});
});
