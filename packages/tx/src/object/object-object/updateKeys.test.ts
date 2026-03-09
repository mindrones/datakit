import {describe, it, expect} from 'vitest';

import {updateKeys} from './updateKeys';

describe('updateKeys', () => {
	const update = updateKeys({
		keys: ['a', 'k', 'm'],
		updater: (x: number) => x * 2,
	});

	it('should apply the updater to the values at the provided keys', () => {
		expect(update({a: 1, b: 2, d: 4, k: 7, m: 2})).toEqual({a: 2, b: 2, d: 4, k: 14, m: 4});
	});

	it('should work when some of the provided keys are not in the input object', () => {
		expect(update({a: 1, b: 2, d: 4})).toEqual({a: 2, b: 2, d: 4});
	});

	it('should work when none of the provided keys are in the input object', () => {
		expect(update({b: 2, d: 4})).toEqual({b: 2, d: 4});
	});

	it('should work with empty input objects', () => {
		expect(update({})).toEqual({});
	});

	it('should not modify the input object', () => {
		const input = {a: 1, b: 2, d: 4, k: 7, m: 2};
		const ref = {...input};
		update(input);

		expect(input).toEqual(ref);
	});
});
