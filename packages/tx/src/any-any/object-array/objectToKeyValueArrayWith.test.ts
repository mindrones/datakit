import {describe, it, expect} from 'vitest';
import * as _ from 'lamb';

import {objectToKeyValueArrayWith} from './objectToKeyValueArrayWith';

describe('objectToKeyValueArrayWith', () => {
	it('should return a function expecting an object and returning an array of {key, value} objects', () => {
		const convertToArray = objectToKeyValueArrayWith(_.getKey('a'));
		const obj = {k1: {a: 1}, k2: {a: 2}};

		expect(convertToArray(obj)).toEqual(
			[{key: 'k1', value: 1}, {key: 'k2', value: 2}]
		);
	});
});
