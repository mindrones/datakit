import * as _ from 'lamb';

import {isIterableNotEmpty} from '../../iterable/boolean';
import {trim} from '../string/trim';

/**
 * Return true if the trimmed string is not empty
 *
 * @example
 * > isTrimmedNotEmpty('  foo  ')
 * true
 * > isTrimmedNotEmpty('  ')
 * false
 *
 * @since 0.1.0
 */
export const isTrimmedNotEmpty = _.pipe<string, boolean>([
	trim,
	isIterableNotEmpty
]);
