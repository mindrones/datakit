declare module 'lamb' {
	function always<T>(value: T): (...args: unknown[]) => T;

	function application<F extends AnyFunction>(
		fn: F,
		args: Parameters<F>
	): ReturnType<F>;

	function apply<F extends AnyFunction>(
		fn: F
	): (args: Parameters<F>) => ReturnType<F>;

	function applyTo<F extends AnyFunction>(
		args: any[]
	): (fn: F) => typeof args extends Parameters<F> ? ReturnType<F> : never;

	function binary<F extends AnyFunction>(
		fn: F
	): F extends (...args: [infer A, infer B, ...any[]]) => infer R
		? (a: A, b: B) => R
		: never;

	function collect<
		T,
		Rest extends any[],
		Fns extends Array<(v: T, ...args: Rest) => any>
	>(
		functions: [...Fns]
	): (
		v: T,
		...args: Rest
	) => {
		[K in keyof Fns]: ReturnType<Fns[K]>;
	};

	function compose<A, B, C>(
		f: UnaryFunction<B, C>,
		g: UnaryFunction<A, B>
	): (value: A) => C;
	function compose<A extends any[], B, C>(
		f: UnaryFunction<B, C>,
		g: (...args: A) => B
	): (...values: A) => C;

	function identity<T>(value: T): T;

	// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
	function invokeOn<TG extends Object>(
		target: TG
	): <M extends string>(
		method: M,
		...args: any[]
	) => M extends keyof TG
		? TG[M] extends AnyFunction
			? ReturnType<TG[M]>
			: never
		: undefined;

	function partial<Args extends (any | __)[], F extends AnyFunction>(
		fn: F,
		args: Args
	): (...args: any[]) => ReturnType<F>;

	function partialRight<Args extends (any | __)[], F extends AnyFunction>(
		fn: F,
		args: Args
	): (...args: any[]) => ReturnType<F>;

	/* pipe: single <A, R> overload — annotate input and output explicitly:
	 * `_.pipe<MyInput, MyOutput>([fn1, fn2, fn3])` */
	function pipe<A, R>(functions: ((v: any) => any)[]): (v: A) => R;

	function throttle<F extends AnyFunction>(fn: F, timespan: number): F;

	function unary<T, R>(fn: (a: T, ...args: any[]) => R): UnaryFunction<T, R>;
}
