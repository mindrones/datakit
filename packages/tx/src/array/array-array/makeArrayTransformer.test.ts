import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {makeArrayTransformer} from './makeArrayTransformer';

describe('makeArrayTransformer', () => {
	it('should return a function expecting an array and applying the transforms to its elements', () => {
		const transformer1 = makeArrayTransformer([x => (x as number) * 20, x => (x as number) + 3]);
		expect(transformer1([2, 2])).toEqual([40, 5]);

		const transformer2 = makeArrayTransformer([_.identity, x => parseFloat(x as string)]);
		expect(transformer2(['width', '32px'])).toEqual(['width', 32]);
	});
	it('should return an array of the same length as the transforms array when input is longer', () => {
		const transformer = makeArrayTransformer([x => (x as number) * 20]);
		expect(transformer([1, 1, 1, 1, 1])).toEqual([20]);
	});
	it('should return an array of the same length as the input array when it is shorter than transforms', () => {
		const transformer = makeArrayTransformer([x => (x as number) * 20, x => (x as number) + 3]);
		expect(transformer([1])).toEqual([20]);
	});
});
