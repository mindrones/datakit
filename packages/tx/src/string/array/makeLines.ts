import * as _ from 'lamb';

import {trim} from '../string/trim';
import {splitByEOL} from './splitByEOL';

/**
 * Return lines in a string (trimmed, split by newline)
 *
 * @example
 * > makeLines('A,B\n1,2\n3,4\n')
 * ['A,B', '1,2', '3,4']
 *
 * @since 0.1.0
 */
export const makeLines = _.pipe<string, string[]>([
	trim,
	splitByEOL
]);
