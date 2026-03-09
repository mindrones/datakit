import {isValidNumber} from './isValidNumber';

import type {Predicate} from '@datakit/types';

/**
 * Return true if the input, converted to Number, is indeed a number.
 *
 * @since 0.1.0
 */
export const toNumberisValidNumber: Predicate<unknown> =
	value => isValidNumber(Number(value));
