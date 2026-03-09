import type {Predicate} from '@datakit/types';

/**
 * Return true if the input is not a NaN.
 *
 * @since 0.1.0
 */
export const isNotNaN: Predicate<unknown> = value => !Number.isNaN(value);
