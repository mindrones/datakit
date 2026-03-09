import {describe, it, expect} from 'vitest';

import {isObjNotEmpty} from './isObjNotEmpty';

describe('isObjNotEmpty', () => {
	it('should return `true` if the object is not empty', () => {
		expect(isObjNotEmpty({a: 1})).toEqual(true);
	});
	it('should return `false` if the object is empty', () => {
		expect(isObjNotEmpty({})).toEqual(false);
	});
});
