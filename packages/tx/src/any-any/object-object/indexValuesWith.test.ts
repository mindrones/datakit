import {describe, it, expect} from 'vitest';

import {indexValuesWith} from './indexValuesWith';

describe('indexValuesWith', () => {
	it('should return a function expecting an object and returning an index of all its values – single values', () => {
		const reindexedByX = indexValuesWith((obj: {x: unknown}) => obj.x);

		const obj = {
			a: {x: 'unique1', y: 2},
			b: {x: 'unique2', y: 4},
			c: {x: 'unique3', y: 6},
			d: {x: 'unique4', y: 8},
		};
		const expected = {
			unique1: {x: 'unique1', y: 2},
			unique2: {x: 'unique2', y: 4},
			unique3: {x: 'unique3', y: 6},
			unique4: {x: 'unique4', y: 8},
		};

		expect(reindexedByX(obj)).toEqual(expected);
	});
	it('should return a function expecting an object and returning an index of all its values – values being arrays', () => {
		const reindexedByX = indexValuesWith((obj: {x: unknown}) => obj.x);

		const obj = {
			a: [{x: 'unique1', y: 2}, {x: 'unique2', y: 4}],
			b: [{x: 'unique3', y: 6}, {x: 'unique4', y: 8}],
		};
		const expected = {
			unique1: {x: 'unique1', y: 2},
			unique2: {x: 'unique2', y: 4},
			unique3: {x: 'unique3', y: 6},
			unique4: {x: 'unique4', y: 8},
		};

		expect(reindexedByX(obj)).toEqual(expected);
	});
	it('should silently overwrite earlier values when accessor keys collide — last write wins', () => {
		const reindexedByX = indexValuesWith((obj: {x: unknown}) => obj.x);
		const obj = {
			a: {x: 'same', y: 1},
			b: {x: 'same', y: 2},
		};
		expect(reindexedByX(obj)).toEqual({same: {x: 'same', y: 2}});
	});
});
