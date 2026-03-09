import * as _ from 'lamb';

import type {HasLength} from '@datakit/types';

import {is1} from '../../number/boolean';
import {getLength} from '../number/getLength';

/**
 * Return true if the iterable has exactly one element
 *
 * @example
 * > hasIterableLength1('a')
 * true
 * > hasIterableLength1([1])
 * true
 * > hasIterableLength1([1, 2])
 * false
 *
 * @since 0.1.0
 */
export const hasIterableLength1 = _.pipe<HasLength, boolean>([
	getLength,
	is1
]);
