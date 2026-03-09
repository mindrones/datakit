import {describe, it, expect} from 'vitest';

import {ndjsonToArray} from './ndjsonToArray';

describe('ndjsonToArray', () => {
	it('should return the json objects from a ndjson string', () => {
		expect(ndjsonToArray('{"a":1}\n{"b":2}\n\n')).toEqual([{a: 1}, {b: 2}]);
	});
});
