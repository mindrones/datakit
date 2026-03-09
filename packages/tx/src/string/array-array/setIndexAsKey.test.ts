import {describe, it, expect} from 'vitest';

import {setIndexAsKey} from './setIndexAsKey';

describe('setIndexAsKey', () => {
	it('should use `index` by default', () => {
		const setIndex = setIndexAsKey();
		expect(setIndex([{a: 2}, {c: 5}])).toEqual([{a: 2, index: 0}, {c: 5, index: 1}]);
	});
	it('should use the provided key', () => {
		const setIndexAsIdx = setIndexAsKey('idx');
		expect(setIndexAsIdx([{a: 2}, {c: 5}])).toEqual([{a: 2, idx: 0}, {c: 5, idx: 1}]);
	});
});
