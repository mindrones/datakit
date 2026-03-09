import type {Fn} from '@datakit/types';

/**
 * Return a function extracting the portion of a string between the provided
 * indices (first included, second excluded). Note that indices can be negative.
 *
 * @example
 * > slicerPosPos = sliceStringAt([3, 5])
 * > slicerPosPos('0123456789')
 * '34'
 *
 * > slicerPosImplicit = sliceStringAt([3])
 * > slicerPosImplicit('0123456789')
 * '3456789'
 *
 * > slicerPosNeg = sliceStringAt([1, -3])
 * > slicerPosNeg('0123456789')
 * '123456'
 *
 * > slicerNegPos = sliceStringAt([-6, 6])
 * > slicerNegPos('0123456789')
 * '45'
 *
 * @since 0.1.0
 */
export const sliceStringAt: Fn<[number, number?], Fn<string, string>> =
	([beginIndex, endIndex]) => str => str.slice(beginIndex, endIndex);
