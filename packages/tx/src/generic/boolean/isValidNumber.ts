import {isNotNaN} from './isNotNaN';
import {isNumber} from './isNumber';

import type {Predicate} from '@datakit/types';

/**
 * Return true if the input is a valid number (including not being NaN).
 *
 * @since 0.1.0
 */
export const isValidNumber: Predicate<unknown> =
	value => isNumber(value) && isNotNaN(value);
