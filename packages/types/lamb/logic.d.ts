declare module 'lamb' {
	function adapter<T, Fns extends UnaryFunction<T, any>[]>(
		functions: Fns
	): (
		value: T
	) => Exclude<ReturnType<Fns[number]>, undefined> | GetLastReturnType<Fns>;

	/* allOf/anyOf: accept typed predicates without casts */
	function allOf(predicates: Array<(value: any) => boolean>): (value: any) => boolean;
	function anyOf(predicates: Array<(value: any) => boolean>): (value: any) => boolean;

	function areSame(a: any, b: any): boolean;

	function areSVZ(a: any, b: any): boolean;

	function casus<T, U, TT extends T>(
		predicate: Predicate<T, TT>,
		fn: UnaryFunction<TT, U>
	): (value: TT) => U | undefined;
	function casus<T, U>(
		predicate: UnaryFunction<T, boolean>,
		fn: UnaryFunction<T, U>
	): (value: T) => U | undefined;

	function condition<T, U extends T, TR, FR, P extends Predicate<T, U>>(
		predicate: P,
		trueFn: (value: U) => TR,
		falseFn: (value: Exclude<T, U>) => FR
	): (value: T) => U extends T ? TR : FR;
	function condition<T, TR, FR, P extends UnaryFunction<T, boolean>>(
		predicate: P,
		trueFn: (value: T) => TR,
		falseFn: (value: T) => FR
	): (value: T) => TR | FR;

	function gt(a: Ord, b: Ord): boolean;

	function gte(a: Ord, b: Ord): boolean;

	function is(a: any): (b: any) => boolean;

	function isGT(b: Ord): (a: Ord) => boolean;

	function isGTE(b: Ord): (a: Ord) => boolean;

	function isLT(b: Ord): (a: Ord) => boolean;

	function isLTE(b: Ord): (a: Ord) => boolean;

	function isSVZ(a: any): (b: any) => boolean;

	function lt(a: Ord, b: Ord): boolean;

	function lte(a: Ord, b: Ord): boolean;

	function not<T, U extends T, P extends Predicate<T, U>>(
		predicate: P
	): (value: T) => value is Exclude<T, U>;
	function not<T, P extends UnaryFunction<T, boolean>>(
		predicate: P
	): (value: T) => boolean;

	function unless<
		R,
		T,
		U extends T,
		P extends Predicate<T, U>,
		F extends UnaryFunction<Exclude<T, U>, R>
	>(predicate: P, fn: F): (value: T | U) => U extends T ? T : R;
	function unless<
		R,
		T,
		P extends UnaryFunction<T, boolean>,
		F extends UnaryFunction<T, R>
	>(predicate: P, fn: F): (value: T) => ReturnType<P> extends true ? T : R;

	function when<
		R,
		T,
		U extends T,
		P extends Predicate<T, U>,
		F extends UnaryFunction<Exclude<T, U>, R>
	>(predicate: P, fn: F): (value: T | U) => U extends T ? T : T;
	function when<
		R,
		T,
		P extends UnaryFunction<T, boolean>,
		F extends UnaryFunction<T, R>
	>(predicate: P, fn: F): (value: T) => ReturnType<P> extends true ? R : T;
}
