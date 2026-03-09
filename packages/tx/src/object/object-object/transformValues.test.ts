import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {transformValues} from './transformValues';

describe('transformValues', () => {
	const obj = {
		name: 'foo',
		a: '9',
		b: '2',
		width: '10px',
	};

	it('should return a function expecting an object and applying the functions in the provided object to the correspondent object values', () => {
		const conversionFn = transformValues({
			name: _.identity,
			a: _.pipe([Number, Math.sqrt]),
			b: Number,
			width: parseFloat,
		});

		expect(conversionFn(obj)).toEqual({name: 'foo', a: 3, b: 2, width: 10});
	});

	it('should assume identity for not provided keys', () => {
		const conversionFn = transformValues({
			a: _.pipe([Number, Math.sqrt]),
		});

		expect(conversionFn(obj)).toEqual({name: 'foo', a: 3, b: '2', width: '10px'});
	});
});
