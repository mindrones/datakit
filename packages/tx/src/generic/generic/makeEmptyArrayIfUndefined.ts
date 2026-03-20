import type {Maybe} from '@datakit/types';

/**
 * Return an empty array if the input is undefined, identity otherwise.
 *
 * @example
 * > makeEmptyArrayIfUndefined(undefined)
 * []
 * > makeEmptyArrayIfUndefined([1, 2, 3])
 * [1, 2, 3]
 *
 * @since 0.1.0
 */
export const makeEmptyArrayIfUndefined = <T>(x: Maybe<T>): T | never[] =>
	x === undefined ? [] : x;
