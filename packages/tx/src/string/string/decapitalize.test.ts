import {describe, it, expect} from 'vitest';

import {decapitalize} from './decapitalize';

describe('decapitalize', () => {
	it('makes the first letter lowercase', () => {
		expect(decapitalize('Hello')).toEqual('hello');
		expect(decapitalize('HELLO')).toEqual('hELLO');
	});
});
