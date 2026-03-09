import {describe, it, expect} from 'vitest';
import * as _ from 'lamb';

import {valuesWith} from './valuesWith';

describe('valuesWith', () => {
	it('should return a function expecting an object and returning an array of its values processed with the provided function', () => {
		const triplicatedValues = valuesWith(_.add(3));

		expect(triplicatedValues({a: 1, b: 2, c: 3})).toEqual([4, 5, 6]);

		const getFoos = valuesWith(_.getKey('foo'));
		const obj = {
			a: {foo: 1, bar: 2},
			b: {foo: 15, bar: -3},
			c: {foo: 4, bar: 12},
		};

		expect(getFoos(obj)).toEqual([1, 15, 4]);
	});
	it('should return a function expecting an object and returning an array of its values processed with the provided function - using keys', () => {
		const keysAndValues = valuesWith((value, key) => `${value} (${key})`);

		expect(keysAndValues({a: 3, b: 5})).toEqual(['3 (a)', '5 (b)']);
	});
});
