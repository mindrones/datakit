import type {Fn} from '@datakit/types';

/**
 * Return a function expecting a string to be split using the provided separator or regex
 *
 * @example
 * > splitByDoubleDot = makeSplitBy('..')
 * > splitByDoubleDot('aa...a..a.a.aa.....aa..')
 * ['aa', '.a', 'a.a.aa', '', '.aa', '']
 *
 * @since 0.1.0
 */
export const makeSplitBy = (separator: string | RegExp): Fn<string, string[]> =>
	str => str.split(separator);
