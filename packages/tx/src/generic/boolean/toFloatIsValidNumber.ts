import * as _ from 'lamb';

import {isValidNumber} from './isValidNumber';

/**
 * Return true if the input, parsed to float, is a valid number.
 *
 * @since 0.1.0
 */
export const toFloatIsValidNumber = _.pipe<unknown, boolean>([
	String,
	parseFloat,
	isValidNumber
]);
