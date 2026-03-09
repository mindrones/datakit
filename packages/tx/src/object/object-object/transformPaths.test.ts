import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {transformPaths} from './transformPaths';

describe('transformPaths', () => {
	it('should return a function that expects an object and applies the functions to the values at the correspondent paths', () => {
		const transform = transformPaths({
			'a.a2.a22': _.pipe([Number, Math.sqrt]),
			'a.a3': parseInt,
			'b.b2.b24': parseInt,
			'b.b4': parseInt,
		});
		const obj = {
			a: {
				a1: 'a1',
				a2: {
					a21: 'a21',
					a22: '9',
				},
				a3: '3px',
				a4: '2',
			},
			b: {
				b1: 'b1',
				b2: {
					b21: 'foo',
					b22: '9',
					b23: '2',
					b24: '24px',
				},
				b3: '2',
				b4: '4px',
			},
		};
		const expected = {
			a: {
				a1: 'a1',
				a2: {
					a21: 'a21',
					a22: 3,
				},
				a3: 3,
				a4: '2',
			},
			b: {
				b1: 'b1',
				b2: {
					b21: 'foo',
					b22: '9',
					b23: '2',
					b24: 24,
				},
				b3: '2',
				b4: 4,
			},
		};

		expect(transform(obj)).toEqual(expected);
	});
});
