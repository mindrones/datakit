import {isTrimmedNotEmpty} from '../../string/boolean/isTrimmedNotEmpty';
import {splitByEOL} from './splitByEOL';

/**
 * Return an array from a ndjson string
 *
 * @example
 * > ndjsonToArray('{"a":1}\n{"b":2}\n\n')
 * [{a: 1}, {b: 2}]
 *
 * @since 0.1.0
 */
export const ndjsonToArray = (ndjsonString: string): unknown[] =>
	splitByEOL(ndjsonString)
	.reduce(
		(array: unknown[], str: string) => {
			if (isTrimmedNotEmpty(str)) {
				array.push(JSON.parse(str) as unknown);
			}
			return array;
		},
		[]
	);
