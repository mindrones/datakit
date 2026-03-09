import * as _ from 'lamb';
import {describe, it, expect} from 'vitest';

import {joinWithBlank, makeMergeAppliedFnMap, roundTo} from '@datakit/tx';

import type {Obj} from '@datakit/types';

const roundTo2 = roundTo(2);

describe('makeMergeAppliedFnMap', () => {
	it('should return a function that applies the provided map to the expected object and merges the result to the object', () => {
		const enhancer = makeMergeAppliedFnMap({
			coords: _.collect([_.getKey('lng'), _.getKey('lat')]),
			fullname: _.pipe([
				_.collect([_.getKey('fname'), _.getKey('lname')]),
				joinWithBlank,
			]),
			lat: (obj: Obj<unknown>) => roundTo2(obj.lat as number),
			lng: (obj: Obj<unknown>) => roundTo2(obj.lng as number),
		});
		const object = {
			fname: 'John',
			lat: 2.345434,
			lname: 'Woo',
			lng: 10.3425,
		};
		const expected = {
			coords: [10.3425, 2.345434],
			fname: 'John',
			fullname: 'John Woo',
			lat: 2.35,
			lname: 'Woo',
			lng: 10.34,
		};

		expect(enhancer(object)).toEqual(expected);
	});
});
