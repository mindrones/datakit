import * as _ from 'lamb';

import {trim} from '../string/trim';
import {splitByEOL} from './splitByEOL';

/**
 * Return rows in a string excluding the first line (the header).
 * Useful for CSVs.
 *
 * @example
 * > makeRows('A,B\n1,2\n3,4\n')
 * ['1,2', '3,4']
 *
 * @since 0.1.0
 */
export const makeRows = _.pipe<string, string[]>([
	trim,
	splitByEOL,
	_.tail
]);
