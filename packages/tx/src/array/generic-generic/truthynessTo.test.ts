import {describe, it, expect} from 'vitest';

import {truthynessTo} from './truthynessTo';

describe('truthynessTo', () => {
	const toNum = truthynessTo([0, 1]);
	const toString = truthynessTo(['OK!', 'Sorry!']);
	const toObject = truthynessTo([{value: 1}, {value: -1}]);

	it('return a function that maps the input to the first or second element - bool', () => {
		expect(toNum(true)).toEqual(0);
		expect(toNum(false)).toEqual(1);
		expect(toString(true)).toEqual('OK!');
		expect(toString(false)).toEqual('Sorry!');
		expect(toObject(true)).toEqual({value: 1});
		expect(toObject(false)).toEqual({value: -1});
	});
	it('return a function that maps the input to the first or second element - number', () => {
		expect(toNum(3)).toEqual(0);
		expect(toNum(0)).toEqual(1);
		expect(toString(3)).toEqual('OK!');
		expect(toString(0)).toEqual('Sorry!');
		expect(toObject(3)).toEqual({value: 1});
		expect(toObject(0)).toEqual({value: -1});
	});
	it('return a function that maps the input to the first or second element - string', () => {
		expect(toNum('hey')).toEqual(0);
		expect(toNum('')).toEqual(1);
		expect(toString('hey')).toEqual('OK!');
		expect(toString('')).toEqual('Sorry!');
		expect(toObject('hey')).toEqual({value: 1});
		expect(toObject('')).toEqual({value: -1});
	});
});
