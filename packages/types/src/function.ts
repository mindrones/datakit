/**
 * A generic unary function.
 * Useful for general-purpose transformations.
 *
 * @since 0.1.0
 */
export type Fn<A, B> = (a: A) => B;

/**
 * A predicate function.
 * Useful for filtering and conditional logic.
 *
 * @example
 * > const isEven: Predicate<number> = n => n % 2 === 0;
 * > [1, 2, 3, 4].filter(isEven);
 * [2, 4]
 *
 * @since 0.1.0
 */
export type Predicate<A> = (a: A) => boolean;

/**
 * Useful for event handlers and other side-effectful functions.
 *
 * @example
 * > const handleClick: Action<string> = key => {
 * >	console.log(`Clicked on ${key}`);
 * > };
 *
 * @since 0.1.0
 */
export type Action<A> = (a: A) => void;

/**
 * Useful for event handlers that need to know the key and label of the item being interacted with.
 *
 * @example
 * > const handleClick: ActionKL = (key, label) => {
 * >	console.log(`Clicked on ${label} (key: ${key})`);
 * > };
 *
 * @since 0.1.0
 */
export type ActionKL = (key: string, label?: string) => void;

/**
 * Useful for effects and other side-effectful functions that don't need any input.
 *
 * @example
 * > const handleReset: Effect = () => {
 * >	console.log('Resetting...');
 * > };
 *
 * @since 0.1.0
 */
export type Effect = () => void;
