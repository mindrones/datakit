import {describe, it, expect} from 'vitest';

import {toFloatOrIdentity} from './toFloatOrIdentity';

describe('toFloatOrIdentity', () => {
	it('should return a number if the input can be converted to a float, identity otherwise', () => {
		expect(toFloatOrIdentity('2')).toEqual(2);
		expect(toFloatOrIdentity('2px')).toEqual(2);
		expect(toFloatOrIdentity('')).toEqual('');
		expect(toFloatOrIdentity('h2o')).toEqual('h2o');
		expect(toFloatOrIdentity([1.1])).toEqual(1.1);
		expect(toFloatOrIdentity([1.1, 2])).toEqual(1.1);
		expect(toFloatOrIdentity([1.1, 2, 3])).toEqual(1.1);
		expect(toFloatOrIdentity([])).toEqual([]);
		expect(toFloatOrIdentity({a: 1})).toEqual({a: 1});
		expect(toFloatOrIdentity(true)).toEqual(true);
		expect(toFloatOrIdentity(null)).toEqual(null);
		expect(toFloatOrIdentity(undefined)).toEqual(undefined);
	});
});
