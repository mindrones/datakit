import {describe, it, expect} from 'vitest';

import {makeRows} from './makeRows';

describe('makeRows', () => {
	it('should return rows in a string excluding the first line (the header)', () => {
		const rows1 = makeRows('A,B\n1,2\n3,4\n');
		const rows2 = makeRows('A,B\n1,2\n3,4');
		const expected = ['1,2', '3,4'];
		expect(rows1).toEqual(expected);
		expect(rows2).toEqual(expected);
	});
	it('should return an empty array if the provided string has just one line', () => {
		expect(makeRows('A,B\n')).toEqual([]);
	});
});
