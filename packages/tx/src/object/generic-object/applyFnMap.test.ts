import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {applyFnMap, joinWithBlank} from '@datakit/tx';

describe('applyFnMap', () => {
	it('should return a function expecting an object to be used as the argument of the provided functions', () => {
		const object = {fname: 'John', lname: 'Woo', lng: 1, lat: 2};
		const format = applyFnMap({
			coords: _.collect([_.getKey('lng'), _.getKey('lat')]),
			fullname: _.pipe([
				_.collect([_.getKey('fname'), _.getKey('lname')]),
				joinWithBlank,
			]),
		});

		expect(format(object)).toEqual({coords: [1, 2], fullname: 'John Woo'});
	});

	it('should work with any type of input - Number', () => {
		const checkNumber = applyFnMap({
			range: _.collect([_.add(1), _.deduct(1)]),
			sign: Math.sign,
		});

		expect(checkNumber(1)).toEqual({range: [2, 0], sign: 1});
		expect(checkNumber(-10)).toEqual({range: [-9, -11], sign: -1});
	});

	it('should work with any type of input - String', () => {
		const checkString = applyFnMap({
			parts: _.splitBy('/'),
			hasNumbersOnly: _.testWith(/^\d+$/gu),
		});

		expect(checkString('aa/bb')).toEqual({parts: ['aa', 'bb'], hasNumbersOnly: false});
		expect(checkString('123')).toEqual({parts: ['123'], hasNumbersOnly: true});
		expect(checkString('123/g')).toEqual({parts: ['123', 'g'], hasNumbersOnly: false});
	});
});
