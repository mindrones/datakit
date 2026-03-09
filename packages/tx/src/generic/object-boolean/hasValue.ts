import * as _ from 'lamb';

import type {Obj} from '@datakit/types';

import {isEqualTo} from '../any-boolean/isEqualTo';


/**
 * Return a function that returns true if at least one of the input object
 * properties has the provided value.
 *
 * @example
 * > hasTwo = hasValue(2)
 * > hasTwo({a: 1, b: 2})
 * true
 * > hasTwo({a: 1, b: 3})
 * false
 *
 * @since 0.1.0
 */
export const hasValue = <T>(value: T) => _.pipe<Obj<unknown>, boolean>([
	_.values,
	_.some(isEqualTo(value))
]);
