import {describe, it, expect} from 'vitest';

import {makeMergeKeyValue} from './makeMergeKeyValue';

describe('makeMergeKeyValue', () => {
	const mergeFooValue = makeMergeKeyValue('foo', {b: -2, c: -3});

	it('should merge the value to an existing object at the provided key', () => {
		const merged = mergeFooValue({
			foo: {a: 1, b: 2},
			bar: {k: 1},
		});
		const expected = {
			foo: {a: 1, b: -2, c: -3},
			bar: {k: 1},
		};

		expect(merged).toEqual(expected);
	});

	it('should merge the value to a non-existing object at the provided key', () => {
		const merged = mergeFooValue({
			bar: {k: 1},
		});
		const expected = {
			foo: {b: -2, c: -3},
			bar: {k: 1},
		};

		expect(merged).toEqual(expected);
	});
});
