import {describe, it, expect} from 'vitest';

import {isIterableNotEmpty} from './isIterableNotEmpty';

describe('isIterableNotEmpty', () => {
	it('returns true for non-empty string', () =>
		expect(isIterableNotEmpty('a')).toEqual(true)
	);
	it('returns true for non-empty array', () =>
		expect(isIterableNotEmpty([1, 2])).toEqual(true)
	);
	it('returns false for empty string', () =>
		expect(isIterableNotEmpty('')).toEqual(false)
	);
	it('returns false for empty array', () =>
		expect(isIterableNotEmpty([])).toEqual(false)
	);
});
