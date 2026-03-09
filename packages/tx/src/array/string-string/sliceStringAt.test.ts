import {describe, it, expect} from 'vitest';

import {sliceStringAt} from './sliceStringAt';

describe('sliceStringAt', () => {
	it('should return a function extracting the portion of a string between the provided indices (both positive)', () => {
		const slicer = sliceStringAt([3, 5]);
		expect(slicer('0123456789')).toEqual('34');
	});
	it('should return a function extracting the portion of a string from the provided index (second index implicit)', () => {
		const slicer = sliceStringAt([3]);
		expect(slicer('0123456789')).toEqual('3456789');
	});
	it('should return a function extracting the portion of a string (first negative, second positive)', () => {
		const slicer = sliceStringAt([-6, 6]);
		expect(slicer('0123456789')).toEqual('45');
	});
	it('should return a function extracting the portion of a string (first positive, second negative)', () => {
		const slicer = sliceStringAt([1, -3]);
		expect(slicer('0123456789')).toEqual('123456');
	});
});
