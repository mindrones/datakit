declare module 'lamb' {
	type AnyFunction<R = any> = (...args: any[]) => R;

	type Constructor<T> = abstract new (...args: any) => T;

	type FoldAccumulatorCallback<
		L extends ArrayLike<any>,
		R,
		I extends keyof L & number = any
	> = (result: R, current: L[I], idx: I, list: L) => R;

	type GetLastReturnType<Fns extends AnyFunction[]> = Fns extends [
		...args: any[],
		(...lastArgs: any) => infer U
	]
		? U
		: never;

	type GetPath<
		S extends Record<PropertyKey, any>,
		P extends string,
		SEP extends string = '.'
	> = P extends keyof S
		? S[P]
		: P extends `${number}`
			? S[number] | undefined
			: P extends `${infer Start}${SEP}${infer Rest}`
				? GetPath<S[Start], Rest, SEP>
				: undefined;

	type ListIteratorCallback<
		L extends ArrayLike<any>,
		R,
		I extends keyof L & number = any
	> = (element: L[I], idx: I, list: L) => R;

	type ListIteratorPredicateCallback<T, U extends T> = (
		element: T,
		idx: number,
		list: ArrayLike<T>
	) => element is U;

	type ObjectIteratorCallback<
		S extends Record<string, any>,
		R,
		K extends keyof S & string = any
	> = (value: S[K], key: K, source: S) => R;

	type Ord =
		// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
		| Boolean
		| boolean
		| Date
		// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
		| Number
		| number
		// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
		| String
		| string;

	type Predicate<T, U extends T> = (v: T) => v is U;

	type ReduceAccumulatorCallback<
		T,
		L extends ArrayLike<T>,
		I extends keyof L & number = any
	> = (prev: T, current: L[I], idx: I, list: L) => T;

	/* SorterReader has no generic — accepts any value, enabling typed readers
	 * like `getKey`/`getValue` to be passed without casts. */
	type SorterReader = (value: any) => any;

	type SorterComparer<T = any> = (a: T, b: T) => number;

	type Sorter<T = any, IsDesc extends boolean = false> = {
		compare: (a: T, b: T) => number;
		isDescending: IsDesc;
	};

	type UnaryFunction<A = any, B = any> = (v: A) => B;

	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	type __ = {};
}
