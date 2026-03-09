import {describe, it, expect} from 'vitest';

import {trimLastNewline} from './trimLastNewline';

describe('trimLastNewline', () => {
	it('does not trim if the last char is not a newline', () => {
		expect(trimLastNewline('a\nb\nc')).toEqual('a\nb\nc');
	});
	it('trims a Unix newline at the end', () => {
		expect(trimLastNewline('a\nb\nc\n')).toEqual('a\nb\nc');
	});
	it('trims only one Unix newline at the end', () => {
		expect(trimLastNewline('a\nb\nc\n\n')).toEqual('a\nb\nc\n');
	});
	it('trims a Windows newline at the end', () => {
		expect(trimLastNewline('a\nb\nc\r\n')).toEqual('a\nb\nc');
	});
	it('trims only the last Windows newline at the end', () => {
		expect(trimLastNewline('a\nb\nc\n\r\n')).toEqual('a\nb\nc\n');
	});
});
