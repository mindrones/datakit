import {describe, it, expect} from 'vitest';

import {getLabelLowercase} from './getLabelLowercase';

describe('getLabelLowercase', () => {
	it('should retrieve the label property lowercased', () => {
		expect(getLabelLowercase({label: 'Foo', value: 42})).toBe('foo');
	});
	it('should return empty string if label is undefined', () => {
		expect(getLabelLowercase({value: 42})).toBe('');
	});
	it('should lowercase already-lowercase labels', () => {
		expect(getLabelLowercase({label: 'bar'})).toBe('bar');
	});
});
