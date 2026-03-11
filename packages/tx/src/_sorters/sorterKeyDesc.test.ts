import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {sorterKeyDesc} from './sorterKeyDesc';

describe('sorterKeyDesc', () => {
	it('should sort items by key descending when used with _.sortWith', () => {
		const items = [{key: 'b', value: 1}, {key: 'a', value: 2}, {key: 'c', value: 3}];
		expect(_.sortWith([sorterKeyDesc])(items)).toEqual([
			{key: 'c', value: 3},
			{key: 'b', value: 1},
			{key: 'a', value: 2},
		]);
	});
});
