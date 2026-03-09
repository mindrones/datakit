import {describe, it, expect} from 'vitest';
import * as _ from 'lamb';

import {makeIsWithinRange, makeRandomNumInRange} from '@datakit/tx';

describe('makeRandomNumInRange', () => {
	it('should return a number within the specified range', () => {
		_.forEach(_.range(0, 1e3), () => {
			const range: [number, number] = [
				100 * Math.random(),
				100 + 100 * Math.random()
			];
			const randomNumber = makeRandomNumInRange(range);
			const isWithinRange = makeIsWithinRange(range);
			expect(isWithinRange(randomNumber)).toEqual(true);
		});
	});
});
