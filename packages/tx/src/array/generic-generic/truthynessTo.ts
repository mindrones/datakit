/**
 * Return a function that maps the input to the first or the second element
 * of the provided pair: the first if its truthy, the second otherwise.
 *
 * @example
 * > boolToNum = truthynessTo([0, 1])
 * > boolToNum(true)
 * 0
 * > boolToNum(false)
 * 1
 *
 * > boolToString = truthynessTo(['OK!', 'Sorry!'])
 * > boolToString(true)
 * 'OK!'
 * > boolToString(false)
 * 'Sorry!'
 *
 * @since 0.1.0
 */
export const truthynessTo = <T>([valueIfTruthy, valueIfFalsy]: [T, T]) =>
	(x: unknown): T => x ? valueIfTruthy : valueIfFalsy;
