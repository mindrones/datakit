import * as _ from 'lamb';

import type {HasLength} from '@datakit/types';

import {isGT1} from '../../number/boolean';
import {getLength} from '../number/getLength';

/**
 * Return true if the iterable has more than one element
 *
 * @example
 * > isIterableLongerThan1('ab')
 * true
 * > isIterableLongerThan1([1, 2])
 * true
 * > isIterableLongerThan1([1])
 * false
 *
 * @since 0.1.0
 */
export const isIterableLongerThan1 = _.pipe<HasLength, boolean>([
	getLength,
	isGT1
]);
