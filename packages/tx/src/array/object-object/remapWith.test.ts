import {describe, it, expect} from 'vitest';

import {remapWith} from './remapWith';

describe('remapWith', () => {
	const remap = remapWith([
		(key: string) => `${key}${key}`,
		(value: unknown) => 3 * (value as number),
	]);

	it('should be able to remap an object', () => {
		expect(remap({a: 1, b: 2})).toEqual({aa: 3, bb: 6});
	});
	it('should be able to remap an empty object', () => {
		expect(remap({})).toEqual({});
	});
});
