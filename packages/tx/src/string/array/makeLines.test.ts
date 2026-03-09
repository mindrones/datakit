import {describe, it, expect} from 'vitest';

import {makeLines} from './makeLines';

describe('makeLines', () => {
	it('should return lines in a string', () => {
		const rows1 = makeLines('A,B\n1,2\n3,4\n');
		const rows2 = makeLines('A,B\n1,2\n3,4');
		const expected = ['A,B', '1,2', '3,4'];
		expect(rows1).toEqual(expected);
		expect(rows2).toEqual(expected);
	});
});
