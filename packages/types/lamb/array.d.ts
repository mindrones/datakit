declare module 'lamb' {
	function append<T>(value: T): (arrayLike: ArrayLike<T>) => Array<T>;

	function appendTo<T>(arrayLike: ArrayLike<T>, value: T): Array<T>;

	function contains<T>(value: T): (arrayLike: ArrayLike<T>) => boolean;

	function count<
		R extends string,
		L extends ArrayLike<any>,
		F extends ListIteratorCallback<L, R>
	>(arrayLike: L, iteratee: F): Record<R, number>;

	function countBy<
		R extends string,
		L extends ArrayLike<any>,
		F extends ListIteratorCallback<L, R>
	>(iteratee: F): (arrayLike: L) => Record<R, number>;

	function difference<T>(a: ArrayLike<T>, b: ArrayLike<T>): Array<T>;

	function drop(n: number): <T>(arrayLike: ArrayLike<T>) => Array<T>;

	function dropFrom<T>(arrayLike: ArrayLike<T>, n: number): Array<T>;

	function dropLastWhile<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(predicate: P): (arrayLike: L) => Array<T>;

	function dropWhile<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(predicate: P): (arrayLike: L) => Array<T>;

	function every<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(predicate: P): (arrayLike: L) => boolean;

	function everyIn<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(arrayLike: L, predicate: P): boolean;

	function filter<T, U extends T>(
		arrayLike: ArrayLike<T>,
		predicate: ListIteratorPredicateCallback<T, U>
	): Array<U>;
	function filter<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(arrayLike: L, predicate: P): Array<T>;

	function filterWith<T, U extends T>(
		predicate: ListIteratorPredicateCallback<T, U>
	): (arrayLike: ArrayLike<T>) => Array<U>;
	function filterWith<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(predicate: P): (arrayLike: L) => Array<T>;
	function filterWith(
		predicate: (item: any, ...rest: any[]) => boolean
	): (arrayLike: ArrayLike<any>) => Array<any>;

	function find<T, U extends T>(
		arrayLike: ArrayLike<T>,
		predicate: ListIteratorPredicateCallback<T, U>
	): U | undefined;
	function find<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(arrayLike: L, predicate: P): T | undefined;

	function findIndex<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(arrayLike: L, predicate: P): number;

	function findIndexWhere<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(predicate: P): (arrayLike: L) => number;

	function findLast<T, U extends T>(
		arrayLike: ArrayLike<T>,
		predicate: ListIteratorPredicateCallback<T, U>
	): U | undefined;
	function findLast<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(arrayLike: L, predicate: P): T | undefined;

	function findLastIndex<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(arrayLike: L, predicate: P): number;

	function findLastIndexWhere<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(predicate: P): (arrayLike: L) => number;

	function findLastWhere<T, U extends T>(
		predicate: ListIteratorPredicateCallback<T, U>
	): (arrayLike: ArrayLike<T>) => U | undefined;
	function findLastWhere<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(predicate: P): (arrayLike: L) => T | undefined;

	function findWhere<T, U extends T>(
		predicate: ListIteratorPredicateCallback<T, U>
	): (arrayLike: ArrayLike<T>) => U | undefined;
	function findWhere<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(predicate: P): (arrayLike: L) => T | undefined;

	/* flatMap: iteratee returns T[] → result is T[] (not T[][]) */
	function flatMap<T>(
		array: ArrayLike<any>,
		iteratee: (item: any, idx?: number, array?: any[]) => T[]
	): Array<T>;

	function flatMapWith<T>(
		iteratee: (item: any, idx?: number, array?: any[]) => T[]
	): (array: ArrayLike<any>) => Array<T>;

	function flatten<T, U extends T | T[], A extends Array<U>>(
		array: A
	): Array<T>;

	/* forEach callback may return anything (not restricted to undefined) */
	function forEach<T>(
		arrayLike: ArrayLike<T>,
		iteratee: (element: T, idx?: number, list?: ArrayLike<T>) => any
	): undefined;

	function getAt(
		index: number
	): <T>(arrayLike: ArrayLike<T>) => T | undefined;

	function getIndex<T>(arrayLike: ArrayLike<T>, index: number): T | undefined;

	/* groupBy / group: iteratee may return any value, not just K extends string */
	function group(
		arrayLike: ArrayLike<any>,
		iteratee: (item: any, idx?: number, list?: any[]) => any
	): Record<string, Array<any>>;

	function groupBy(
		iteratee: (item: any, idx?: number, list?: any[]) => any
	): (arrayLike: ArrayLike<any>) => Record<string, Array<any>>;

	function head<T, const L extends ArrayLike<T>>(
		arrayLike: L
	): L['length'] extends 0 ? undefined : L[0];

	/* indexBy / index: iteratee may return any value */
	function index(
		arrayLike: ArrayLike<any>,
		iteratee: (item: any, idx?: number, list?: any[]) => any
	): Record<string, any>;

	function indexBy(
		iteratee: (item: any, idx?: number, list?: any[]) => any
	): (arrayLike: ArrayLike<any>) => Record<string, any>;

	function init<T>(arrayLike: ArrayLike<T>): Array<T>;

	function insert<T>(
		arrayLike: ArrayLike<T>,
		index: number,
		element: T
	): Array<T>;

	function insertAt<T>(
		index: number,
		element: T
	): (arrayLike: ArrayLike<T>) => Array<T>;

	function intersection<T>(a: ArrayLike<T>, b: ArrayLike<T>): Array<T>;

	function isIn<T>(arrayLike: ArrayLike<T>, value: T): boolean;

	function join<T>(arrayLike: ArrayLike<T>, separator: string): string;

	function joinWith(
		separator: string
	): <T>(arrayLike: ArrayLike<T>) => string;

	function last<T, const L extends ArrayLike<T>>(
		arrayLike: L
	): L['length'] extends 0
		? undefined
		: L extends readonly [...any[], infer Last]
			? Last
			: L extends Array<infer U>
				? U
				: T;

	function list<T>(...values: T[]): Array<T>;

	function map<T, L extends ArrayLike<T>, R>(
		arrayLike: L,
		iteratee: ListIteratorCallback<L, R>
	): Array<R>;

	function mapWith<T, L extends ArrayLike<T>, R>(
		iteratee: ListIteratorCallback<L, R>
	): (arrayLike: L) => Array<R>;

	function partition<T, U extends T>(
		arrayLike: ArrayLike<T>,
		predicate: ListIteratorPredicateCallback<T, U>
	): [Array<U>, Array<Exclude<T, U>>];
	function partition<T>(
		arrayLike: ArrayLike<T>,
		predicate: ListIteratorCallback<ArrayLike<T>, boolean>
	): [Array<T>, Array<T>];

	function partitionWith<T, U extends T>(
		predicate: ListIteratorPredicateCallback<T, U>
	): (arrayLike: ArrayLike<T>) => [Array<U>, Array<Exclude<T, U>>];
	function partitionWith<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(predicate: P): (arrayLike: L) => [Array<T>, Array<T>];

	function pluck<T extends Record<PropertyKey, any>, K extends keyof T>(
		key: K
	): <U extends ArrayLike<T>>(arrayLike: U) => Array<U[number][K]>;

	function pluckFrom<T extends Record<PropertyKey, any>, K extends keyof T>(
		arrayLike: ArrayLike<T>,
		key: K
	): Array<T[K]>;

	function pull<T, L extends ArrayLike<T>, V extends ArrayLike<T>>(
		values: V
	): (arrayLike: L) => Array<T>;

	function pullFrom<T, L extends ArrayLike<T>, V extends ArrayLike<T>>(
		arrayLike: L,
		values: V
	): Array<T>;

	/* reduce: initialValue is `any` so R is inferred from the callback alone,
	 * not from a `[]` literal (which would give `never[]`). */
	function reduce<T>(
		arrayLike: ArrayLike<T>,
		accumulator: ReduceAccumulatorCallback<T, ArrayLike<T>>
	): T;
	function reduce<R>(
		arrayLike: ArrayLike<any>,
		accumulator: (acc: R, current: any, idx: number, list: any) => R,
		initialValue?: any
	): R;

	function reduceRight<T>(
		arrayLike: ArrayLike<T>,
		accumulator: ReduceAccumulatorCallback<T, ArrayLike<T>>
	): T;
	function reduceRight<R>(
		arrayLike: ArrayLike<any>,
		accumulator: (acc: R, current: any, idx: number, list: any) => R,
		initialValue?: any
	): R;

	function reduceRightWith<T>(
		accumulator: ReduceAccumulatorCallback<T, ArrayLike<T>>
	): (arrayLike: ArrayLike<T>) => T;
	function reduceRightWith<R>(
		accumulator: (acc: R, current: any, idx: number, list: any) => R,
		initialValue?: any
	): (list: ArrayLike<any>) => R;

	function reduceWith<T>(
		accumulator: ReduceAccumulatorCallback<T, ArrayLike<T>>
	): (arrayLike: ArrayLike<T>) => T;
	function reduceWith<R>(
		accumulator: (acc: R, current: any, idx: number, list: any) => R,
		initialValue?: any
	): (list: ArrayLike<any>) => R;

	function reverse<T, L extends ArrayLike<T>>(arrayLike: L): Array<T>;

	function rotate<T, L extends ArrayLike<T>>(
		arrayLike: L,
		amount: number
	): Array<T>;

	function rotateBy<T, L extends ArrayLike<T>>(
		amount: number
	): (arrayLike: L) => Array<T>;

	function setAt<T, L extends ArrayLike<T>>(
		index: number,
		value: T
	): (arrayLike: L) => Array<T>;

	function setIndex<T, L extends ArrayLike<T>>(
		arrayLike: L,
		index: number,
		value: T
	): Array<T>;

	function shallowFlatten<T, U extends T | T[]>(array: Array<U>): Array<U>;

	function slice<T>(
		arrayLike: ArrayLike<T>,
		start: number,
		end: number
	): Array<T>;

	function sliceAt(
		start: number,
		end: number
	): <T>(arrayLike: ArrayLike<T>) => Array<T>;

	function some<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(predicate: P): (arrayLike: L) => boolean;

	function someIn<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(arrayLike: L, predicate: P): boolean;

	/* sort / sortWith / sortedInsert: readers typed as (value: any) => any
	 * so that typed extractors like `getKey`/`getValue` are accepted without casts. */
	function sort<T>(
		arrayLike: ArrayLike<T>,
		sorters?: Array<Sorter<T, boolean> | ((value: any) => any)>
	): Array<T>;

	function sortWith<T>(
		sorters?: Array<Sorter<T, boolean> | ((value: any) => any)>
	): (arrayLike: ArrayLike<T>) => Array<T>;

	function sortedInsert<T>(
		arrayLike: ArrayLike<T>,
		element: T,
		sorters?: Array<Sorter<T, boolean> | ((value: any) => any)>
	): Array<T>;

	function sorter(
		reader?: (value: any) => any,
		comparer?: SorterComparer
	): Sorter<any, false>;

	function sorterDesc(
		reader?: (value: any) => any,
		comparer?: SorterComparer
	): Sorter<any, true>;

	function symmetricDifference<T>(a: ArrayLike<T>, b: ArrayLike<T>): Array<T>;

	function tail<T>(arrayLike: ArrayLike<T>): Array<T>;

	function take(amount: number): <T>(arrayLike: ArrayLike<T>) => Array<T>;

	function takeFrom<T>(arrayLike: ArrayLike<T>, amount: number): Array<T>;

	function takeLastWhile<T, U extends T>(
		predicate: ListIteratorPredicateCallback<T, U>
	): (arrayLike: ArrayLike<T>) => Array<U>;
	function takeLastWhile<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(predicate: P): (arrayLike: L) => Array<T>;

	function takeWhile<T, U extends T>(
		predicate: ListIteratorPredicateCallback<T, U>
	): (arrayLike: ArrayLike<T>) => Array<U>;
	function takeWhile<
		T,
		L extends ArrayLike<T>,
		P extends ListIteratorCallback<L, boolean>
	>(predicate: P): (arrayLike: L) => Array<T>;

	function transpose<T>(arrayLike: ArrayLike<ArrayLike<T>>): Array<Array<T>>;

	function union<T, U>(a: ArrayLike<T>, b: ArrayLike<U>): Array<T | U>;

	function unionBy<T, U>(
		iteratee: ListIteratorCallback<Array<T | U>, any>
	): (a: ArrayLike<T>, b: ArrayLike<U>) => Array<T | U>;

	function uniques<T>(arrayLike: ArrayLike<T>): Array<T>;

	function uniquesBy<
		T,
		L extends ArrayLike<T>,
		F extends ListIteratorCallback<L, any>
	>(iteratee: F): (arrayLike: L) => Array<T>;

	function updateAt<T, L extends ArrayLike<T>, I extends number & keyof L>(
		index: I,
		updater: UnaryFunction<T, T>
	): (arrayLike: L) => Array<T>;

	function updateIndex<T, L extends ArrayLike<T>, I extends number & keyof L>(
		arrayLike: L,
		index: I,
		updater: UnaryFunction<T, T>
	): Array<T>;

	function zip<T, U, L1 extends ArrayLike<T>, L2 extends ArrayLike<U>>(
		a: L1,
		b: L2
	): Array<[L1[number], L2[number]]>;

	function zipWithIndex<T, L extends ArrayLike<T>>(
		arrayLike: L
	): Array<[L[number], number & keyof L]>;
}
