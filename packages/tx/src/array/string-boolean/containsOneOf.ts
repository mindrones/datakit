import type {Predicate} from '@datakit/types';

/**
 * Return a function that checks if a string contains one of the provided strings.
 *
 * @example
 * > isWeight = containsOneOf(['(g)', '(mg)', '(mcg)'])
 * > ['id', 'Energy (kcal)', 'Protein (g)', 'Cholesterol (mg)', 'Selenium (mcg)'].filter(isWeight)
 * ['Protein (g)', 'Cholesterol (mg)', 'Selenium (mcg)']
 *
 * @since 0.1.0
 */
export const containsOneOf =
	(substrings: string[]): Predicate<string> =>
		str => substrings.some(sub => str.includes(sub));
