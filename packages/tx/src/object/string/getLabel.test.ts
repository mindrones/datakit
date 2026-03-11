import {describe, it, expect} from 'vitest';

import {getLabel} from './getLabel';

describe('getLabel', () => {
	it('should retrieve the `label` property of an object', () => {
		expect(getLabel({label: 'foo', value: 42})).toBe('foo');
	});
	it('should return `undefined` if `label` is missing', () => {
		expect(getLabel({value: 42})).toBeUndefined();
	});
});
