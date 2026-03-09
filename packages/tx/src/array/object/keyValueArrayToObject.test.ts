import {describe, it, expect} from 'vitest';

import {keyValueArrayToObject} from './keyValueArrayToObject';

describe('keyValueArrayToObject', () => {
	it('should return an object built using `key`s and `value`s from the objects in the provided array', () => {
		expect(keyValueArrayToObject([
			{key: 'ITA', value: 0},
			{key: 'FRA', value: 0},
			{key: 'BRA', value: 0},
			{key: 'GER', value: 1},
			{key: 'USA', value: 1},
		])).toEqual({
			'ITA': 0,
			'FRA': 0,
			'BRA': 0,
			'GER': 1,
			'USA': 1
		});
	});
});
