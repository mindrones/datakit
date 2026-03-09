import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {makeWith} from './makeWith';

describe('makeWith', () => {
	it('should return a function that builds an object from keys and transform results', () => {
		const makeCircle = makeWith<number>([
			['radius', 'perimeter', 'area'],
			[_.identity, r => 2 * Math.PI * r, r => Math.PI * Math.pow(r, 2)]
		]);

		expect(makeCircle(3)).toEqual({
			radius: 3,
			perimeter: 18.84955592153876,
			area: 28.274333882308138,
		});
		expect(makeCircle(4)).toEqual({
			radius: 4,
			perimeter: 25.132741228718345,
			area: 50.26548245743669,
		});
	});
});
