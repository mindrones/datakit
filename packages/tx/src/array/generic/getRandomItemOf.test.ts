import {describe, it, expect} from 'vitest';

import {getRandomItemOf, makeIsIncluded, makeOccursIn} from '@datakit/tx';

describe('getRandomItemOf', () => {
	it('get a random number in the array', () => {
		const nums = [0, 1, 2, 3];
		const isIncluded = makeIsIncluded(nums);

		const number = getRandomItemOf(nums);
		expect(number).toSatisfy(isIncluded);
	});
	it('get a random object in the array', () => {
		const objs = [{a: 0}, {a: 1}, {a: 2}, {a: 3}];
		const occursIn = makeOccursIn(objs);

		const obj = getRandomItemOf(objs);
		expect(obj).toSatisfy(occursIn);
	});
});
