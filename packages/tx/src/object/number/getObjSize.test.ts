import {describe, it, expect} from 'vitest';

import {getObjSize} from './getObjSize';

describe('getObjSize', () => {
	it('should return the size of the provided object', () => {
		expect(getObjSize({})).toEqual(0);
		expect(getObjSize({a: 1, b: 2})).toEqual(2);
	});
});
