import type {Predicate} from '@datakit/types';

/**
 * Return the negated input.
 *
 * @since 0.1.0
 */
export const negate: Predicate<unknown> = x => !x;
