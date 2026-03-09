import type {Obj} from '@datakit/types';

/**
 * Return a function expecting an object and concatenating values in the provided list of keys.
 *
 * @example
 * > getProducts = pickAndConcatValues(['food', 'beverage'])
 * > getProducts({
 *     food: ['bread', 'cheese', 'ham'],
 *     beverage: ['wine', 'water'],
 *     id: 'area1',
 *     value: 32.1,
 *   })
 * ['bread', 'cheese', 'ham', 'wine', 'water']
 *
 * @since 0.1.0
 */
export const pickAndConcatValues = (keys: string[]) =>
	<T>(obj: Obj<T[]>): T[] =>
		keys.flatMap(key => obj[key] ?? []);
