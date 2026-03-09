import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {makeAllOccurrencesWith} from './makeAllOccurrencesWith';

describe('makeAllOccurrencesWith', () => {
	it('should return a function expecting an array and returning an object of occurrences of all the keys contained in the property reachable with the provided accessor', () => {
		const items = [
			{foo: 1, bar: {a: 1}},
			{foo: 1, bar: {a: 6, b: -1}},
			{foo: 1, bar: {a: 2, b: 0, c: 1}},
			{foo: 1, bar: {c: 4, e: 2}},
		];
		const makeAllOccurrences = makeAllOccurrencesWith(_.getKey('bar'));
		expect(makeAllOccurrences(items)).toEqual({a: 3, b: 2, c: 2, e: 1});
	});
});
