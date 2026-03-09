import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {applyTransformsSequence} from './applyTransformsSequence';

describe('applyTransformsSequence', () => {
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

	it('should apply orthogonal transforms', () => {
		const transform = applyTransformsSequence([
			['a.a2.a22', _.pipe([Number, Math.sqrt])],
			['a.a3', parseInt],
			['b.b2.b24', parseInt],
			['b.b4', parseInt],
		]);
		expect(transform(obj)).toEqual({
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
		});
	});

	it('should support modifying modified paths', () => {
		const transform = applyTransformsSequence([
			['b', _.values],
			['b.1', _.values],
		]);
		expect(transform(obj)).toEqual({
			a: {
				a1: 'a1',
				a2: {
					a21: 'a21',
					a22: '9',
				},
				a3: '3px',
				a4: '2',
			},
			b: [
				'b1',
				['foo', '9', '2', '24px'],
				'2',
				'4px',
			],
		});
	});

	it('should support modifying paths multiple times', () => {
		const transform = applyTransformsSequence([
			['b', _.values],
			['b.1', _.values],
			['b', _.flatten],
		]);
		expect(transform(obj)).toEqual({
			a: {
				a1: 'a1',
				a2: {
					a21: 'a21',
					a22: '9',
				},
				a3: '3px',
				a4: '2',
			},
			b: ['b1', 'foo', '9', '2', '24px', '2', '4px'],
		});
	});
});
