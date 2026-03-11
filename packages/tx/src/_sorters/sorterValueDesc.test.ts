import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {sorterValueDesc} from './sorterValueDesc';

describe('sorterValueDesc', () => {
	it('should sort items by value descending when used with _.sortWith', () => {
		const items = [{key: 'a', value: 1}, {key: 'b', value: 3}, {key: 'c', value: 2}];
		expect(_.sortWith([sorterValueDesc])(items)).toEqual([
			{key: 'b', value: 3},
			{key: 'c', value: 2},
			{key: 'a', value: 1},
		]);
	});
});
