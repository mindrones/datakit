import type {Fn} from '@datakit/types';

import {makeBiPermutations} from '../../array/array/makeBiPermutations';

/**
 * Return a function returning the pair-permutations of the items returned by the provided `fn`.
 *
 * @example
 * > object = {
 *   key: 'foobars',
 *   value: [{foo: 'a'}, {foo: 'b'}, {bar: 'c'}, {bar: 'd'}]
 * }
 * > makeBiPermutations = makeBiPermutationsWith(getValue)
 * [
 *   [{foo: 'a'}, {foo: 'b'}],
 *   [{foo: 'a'}, {bar: 'c'}],
 *   [{foo: 'a'}, {bar: 'd'}],
 *   [{foo: 'b'}, {bar: 'c'}],
 *   [{foo: 'b'}, {bar: 'd'}],
 *   [{bar: 'c'}, {bar: 'd'}]
 * ]
 *
 * @since 0.1.0
 */
export const makeBiPermutationsWith = <I, T>(fn: Fn<I, T[]>) =>
	(input: I): T[][] =>
		makeBiPermutations(fn(input)) as T[][];
