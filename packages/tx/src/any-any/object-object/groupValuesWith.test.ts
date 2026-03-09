import {describe, it, expect} from 'vitest';

import {groupValuesWith} from './groupValuesWith';

describe('groupValuesWith', () => {
	it('should return a function expecting an object and returning an object grouping its values – single values', () => {
		const regroupedByX = groupValuesWith((obj: {x: unknown}) => obj.x);

		const obj = {
			a: {x: 1, y: 2},
			b: {x: 3, y: 4},
			c: {x: 'a', y: 6},
			d: {x: 1, y: 8},
		};
		const expected = {
			1: [{x: 1, y: 2}, {x: 1, y: 8}],
			3: [{x: 3, y: 4}],
			a: [{x: 'a', y: 6}],
		};

		expect(regroupedByX(obj)).toEqual(expected);
	});
	it('should return a function expecting an object and returning an object grouping its values – values being arrays', () => {
		const regroupedByX = groupValuesWith((obj: {x: unknown}) => obj.x);

		const obj = {
			a: [{x: 1, y: 2}, {x: 3, y: 4}],
			b: [{x: 'a', y: 6}, {x: 1, y: 8}],
		};
		const expected = {
			1: [{x: 1, y: 2}, {x: 1, y: 8}],
			3: [{x: 3, y: 4}],
			a: [{x: 'a', y: 6}],
		};

		expect(regroupedByX(obj)).toEqual(expected);
	});
});
