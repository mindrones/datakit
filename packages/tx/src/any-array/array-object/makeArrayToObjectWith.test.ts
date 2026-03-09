import {describe, it, expect} from 'vitest';

import {makeArrayToObjectWith} from './makeArrayToObjectWith';

describe('makeArrayToObjectWith', () => {
	it('should work with a valueToPair function', () => {
		const valueToPair = (x: unknown) => [`${x}${x}`, `${x}${x}${x}`] as [string, string];
		const arrayToObject = makeArrayToObjectWith(valueToPair);
		const actual = arrayToObject(['a', 'b', 1]);
		const expected = {aa: 'aaa', bb: 'bbb', 11: '111'};
		expect(actual).toEqual(expected);
	});
	it('should work with a valueIndexToPair function', () => {
		const valueIndexToPair = (x: unknown, i: number) => [`${i}${i}`, `${x}${x}${x}`] as [string, string];
		const arrayToObject = makeArrayToObjectWith(valueIndexToPair);
		const actual = arrayToObject(['a', 'b', 1]);
		const expected = {'00': 'aaa', '11': 'bbb', '22': '111'};
		expect(actual).toEqual(expected);
	});
});
