import {describe, it, expect} from 'vitest';

import {isObjEmpty} from './isObjEmpty';

describe('isObjEmpty', () => {
	it('should return `true` if the object is empty', () => {
		expect(isObjEmpty({})).toEqual(true);
	});
	it('should return `false` if the object is not empty', () => {
		expect(isObjEmpty({a: 1})).toEqual(false);
	});
});
