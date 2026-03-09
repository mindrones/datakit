import {describe, it, expect} from 'vitest';

import {toggleItem} from './toggleItem';

describe('toggleItem', () => {
	const arr0 = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
	const arrNo0 = [1, 2, 3, 4, 1, 2, 3, 4];
	const arrTail0 = [1, 2, 3, 4, 1, 2, 3, 4, 0];
	const arrTailObj = [1, 2, 3, 4, 1, 2, 3, 4, {a: 1}];
	const arrTailStr = [1, 2, 3, 4, 1, 2, 3, 4, 'a1'];

	it('should remove instances of the item if it\'s in the array', () => {
		expect(toggleItem(arr0, 0)).toEqual(arrNo0);
	});
	it('should add the item if it\'s not in the array', () => {
		expect(toggleItem(arrNo0, 0)).toEqual(arrTail0);
	});
	it('should add the item if it\'s not in the array (obj)', () => {
		expect(toggleItem(arrNo0 as unknown[], {a: 1})).toEqual(arrTailObj);
		expect(toggleItem(arrNo0 as unknown[], 'a1')).toEqual(arrTailStr);
	});
	it('should remove the item if it\'s in the array (obj)', () => {
		expect(toggleItem(arrTailObj as unknown[], {a: 1})).toEqual(arrNo0);
		expect(toggleItem(arrTailStr as unknown[], 'a1')).toEqual(arrNo0);
	});
});
