import {describe, it, expect} from 'vitest';

import {getRandomIndexOf} from './getRandomIndexOf';

describe('getRandomIndexOf', () => {
	it('get a random index in the array', () => {
		const index = getRandomIndexOf([0, 1, 2, 3]);
		expect(index).toBeLessThanOrEqual(3);
		expect(index).toBeGreaterThanOrEqual(0);
	});
});
