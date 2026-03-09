import * as _ from 'lamb';

import type {HasLength} from '@datakit/types';

import {is0} from '../../number/boolean';
import {getLength} from '../number/getLength';

/**
 * Return true if the iterable is empty
 *
 * @example
 * > isIterableEmpty('')
 * true
 * > isIterableEmpty([])
 * true
 * > isIterableEmpty([1, 2])
 * false
 *
 * @since 0.1.0
 */
export const isIterableEmpty = _.pipe<HasLength, boolean>([
	getLength,
	is0
]);
