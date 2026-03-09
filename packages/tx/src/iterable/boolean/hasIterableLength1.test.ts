import {describe, it, expect} from 'vitest';

import {hasIterableLength1} from './hasIterableLength1';

describe('hasIterableLength1', () => {
	it('returns true for string of length 1', () =>
		expect(hasIterableLength1('a')).toEqual(true)
	);
	it('returns true for array of length 1', () =>
		expect(hasIterableLength1([1])).toEqual(true)
	);
	it('returns false for string longer than 1', () =>
		expect(hasIterableLength1('ab')).toEqual(false)
	);
	it('returns false for array longer than 1', () =>
		expect(hasIterableLength1([1, 2])).toEqual(false)
	);
	it('returns false for empty string', () =>
		expect(hasIterableLength1('')).toEqual(false)
	);
	it('returns false for empty array', () =>
		expect(hasIterableLength1([])).toEqual(false)
	);
});
