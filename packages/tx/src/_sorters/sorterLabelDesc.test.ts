import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {sorterLabelDesc} from './sorterLabelDesc';

describe('sorterLabelDesc', () => {
	it('should sort items by label descending when used with _.sortWith', () => {
		const items = [{label: 'a'}, {label: 'c'}, {label: 'b'}];
		expect(_.sortWith([sorterLabelDesc])(items)).toEqual([
			{label: 'c'},
			{label: 'b'},
			{label: 'a'},
		]);
	});
});
