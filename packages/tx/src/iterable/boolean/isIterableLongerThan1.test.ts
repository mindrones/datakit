import {describe, it, expect} from 'vitest';

import {isIterableLongerThan1} from './isIterableLongerThan1';

describe('isIterableLongerThan1', () => {
	it('returns true for string longer than 1', () =>
		expect(isIterableLongerThan1('ab')).toEqual(true)
	);
	it('returns true for array longer than 1', () =>
		expect(isIterableLongerThan1([1, 2])).toEqual(true)
	);
	it('returns false for string of length 1', () =>
		expect(isIterableLongerThan1('a')).toEqual(false)
	);
	it('returns false for array of length 1', () =>
		expect(isIterableLongerThan1([1])).toEqual(false)
	);
	it('returns false for empty string', () =>
		expect(isIterableLongerThan1('')).toEqual(false)
	);
	it('returns false for empty array', () =>
		expect(isIterableLongerThan1([])).toEqual(false)
	);
});
