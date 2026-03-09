import {describe, it, expect} from 'vitest';

import {noop} from './noop';

describe('noop', () => {
	it('should do nothing and return `undefined`', () => {
		expect(noop()).toEqual(undefined);
		expect(noop(1)).toEqual(undefined);
		expect(noop('d')).toEqual(undefined);
		expect(noop([1, 2])).toEqual(undefined);
		expect(noop({a: 1})).toEqual(undefined);
	});
});
