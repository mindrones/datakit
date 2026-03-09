import {describe, it, expect} from 'vitest';

import {isIterableEmpty} from './isIterableEmpty';

describe('isIterableEmpty', () => {
	it('returns true for empty string', () =>
		expect(isIterableEmpty('')).toEqual(true)
	);
	it('returns true for empty array', () =>
		expect(isIterableEmpty([])).toEqual(true)
	);
	it('returns false for non-empty string', () =>
		expect(isIterableEmpty('a')).toEqual(false)
	);
	it('returns false for non-empty array', () =>
		expect(isIterableEmpty([1, 2])).toEqual(false)
	);
});
