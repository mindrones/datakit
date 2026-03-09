import * as _ from 'lamb';

import type {HasLength} from '@datakit/types';

import {isGT0} from '../../number/boolean';
import {getLength} from '../number/getLength';

/**
 * Return true if the iterable is not empty
 *
 * @example
 * > isIterableNotEmpty('a')
 * true
 * > isIterableNotEmpty([1, 2])
 * true
 * > isIterableNotEmpty([])
 * false
 *
 * @since 0.1.0
 */
export const isIterableNotEmpty = _.pipe<HasLength, boolean>([
	getLength,
	isGT0
]);
