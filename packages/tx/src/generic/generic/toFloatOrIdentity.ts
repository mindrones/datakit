import {isValidNumber} from '../boolean/isValidNumber';

/**
 * Return a number if the input can be converted to float, identity otherwise.
 *
 * @example
 * > toFloatOrIdentity('2')
 * 2
 * > toFloatOrIdentity('h2o')
 * 'h2o'
 *
 * @since 0.1.0
 */
export const toFloatOrIdentity = <T>(x: T): number | T => {
	const parsed = parseFloat(String(x));

	return isValidNumber(parsed) ? parsed : x;
};
