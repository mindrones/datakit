declare module 'lamb' {
	function enumerables<K extends PropertyKey, S extends Record<K, any>>(
		source: S
	): Array<K>;

	function fromPairs<
		const PairsList extends ReadonlyArray<readonly [PropertyKey, any]>
	>(pairsList: PairsList): {[K in PairsList[number] as K[0]]: K[1]};

	function getIn<S extends Record<PropertyKey, any>, K extends string>(
		source: S,
		key: K
	): K extends keyof S ? S[K] : undefined;

	/* returns any — eliminates deferred-conditional incompatibilities
	 * with SorterReader, collect, arraySumWith etc. */
	function getKey(key: PropertyKey): (source: Record<PropertyKey, any>) => any;

	function getPath<P extends string, SEP extends string>(
		path: P,
		separator?: SEP
	): <S extends Record<PropertyKey, any>>(source: S) => GetPath<S, P, SEP>;

	function getPathIn<
		S extends Record<PropertyKey, any>,
		P extends string,
		SEP extends string
	>(source: S, path: P, separator?: SEP): GetPath<S, P, SEP>;

	/* has: missing from lamb-types */
	function has(source: Record<PropertyKey, unknown>, key: PropertyKey): boolean;

	function hasKeyValue<K extends PropertyKey, T, S extends Record<K, T>>(
		key: K,
		value: T
	): (source: S) => boolean;

	function hasPathValue<T, S extends Record<PropertyKey, any>>(
		path: string,
		value: T
	): (source: S) => boolean;

	/* keys: simplified to always return string keys */
	function keys(source: Record<PropertyKey, any>): Array<string>;

	function keySatisfies<
		S extends Record<PropertyKey, any>,
		K extends keyof S,
		U extends S[K],
		P extends Predicate<S[K], U>
	>(predicate: P, key: K): (source: S) => boolean;
	function keySatisfies<
		S extends Record<PropertyKey, any>,
		K extends keyof S,
		P extends UnaryFunction<S[K], boolean>
	>(predicate: P, key: K): (source: S) => boolean;

	/* make: missing from lamb-types */
	function make(keys: ArrayLike<PropertyKey>, values: ArrayLike<any>): Record<string, any>;

	/* mapValues / mapValuesWith: callback typed permissively so typed functions
	 * (pick, getKey, custom accessors) are accepted without casts */
	function mapValues<R>(
		source: Record<string, any>,
		fn: (value: any, key: string, source: Record<string, any>) => R
	): Record<string, R>;

	function mapValuesWith<R>(
		fn: (value: any, key: string, source: Record<string, any>) => R
	): (source: Record<string, any>) => Record<string, R>;

	/* merge: missing from lamb-types */
	function merge<A extends object, B extends object>(source: A, others: B): A & B;

	/* pairs / ownPairs: simplified return type (no conditional) so forEach
	 * can infer the element type without deferral. */
	function ownPairs(
		source: Record<PropertyKey, any>
	): Array<[string, any]>;

	function ownValues<S extends Record<PropertyKey, any>>(
		source: S
	): S extends Record<PropertyKey, never> ? [] : Array<S[keyof S]>;

	function pairs(
		source: Record<PropertyKey, any>
	): Array<[string, any]>;

	function pick<S extends Record<string, any>, K extends string>(
		whitelist: K[]
	): (source: S) => Pick<S, K>;

	function pickIf<
		S extends Record<string, any>,
		P extends ObjectIteratorCallback<S, boolean>
	>(predicate: P): (source: S) => Partial<S>;

	function pickIn<S extends Record<string, any>, K extends string>(
		source: S,
		whitelist: K[]
	): Pick<S, K>;

	function rename<
		DK extends string,
		KM extends Record<string, DK>,
		S extends Record<string, any>
	>(
		keyMap: KM
	): (source: S) => {
		[K in keyof S as K extends keyof KM ? KM[K] : K]: S[K];
	};

	function setIn<S extends Record<PropertyKey, any>, T, K extends string>(
		source: S,
		key: K,
		value: T
	): S & {[k in K]: T};

	function setKey<S extends Record<PropertyKey, any>, T, K extends string>(
		key: K,
		value: T
	): (source: S) => S & {[k in K]: T};

	function setPath(
		path: string,
		value: any,
		separator?: string
	): (source: any) => any;

	function setPathIn(
		source: any,
		path: string,
		value: any,
		separator?: string
	): any;

	function skip<K extends string>(
		blacklist: K[]
	): <S extends Record<string, any>>(source: S) => Omit<S, K>;

	function skipIf<
		S extends Record<PropertyKey, any>,
		P extends ObjectIteratorCallback<S, boolean>
	>(predicate: P): (source: S) => Partial<S>;

	function skipIn<S extends Record<string, any>, K extends string>(
		source: S,
		blacklist: K[]
	): Omit<S, K>;

	function updateIn<
		S extends Record<PropertyKey, any>,
		K extends keyof S & string,
		T,
		F extends UnaryFunction<S[K], T>
	>(
		source: S,
		key: K,
		updater: F
	): T extends S[K] ? S : Omit<S, K> & {[k in K]: T};

	function updateKey<K extends string, F extends UnaryFunction>(
		key: K,
		updater: F
	): <T extends ReturnType<F>, S extends Record<PropertyKey, any>>(
		source: S
	) => S[K] extends T ? S : Omit<S, K> & {[k in K]: T};

	function updatePath(
		path: string,
		updater: UnaryFunction<any, any>,
		separator?: string
	): (source: any) => any;

	function updatePathIn(
		source: any,
		path: string,
		updater: UnaryFunction<any, any>,
		separator?: string
	): any;

	function values<S extends Record<PropertyKey, any>>(
		source: S
	): S extends Record<PropertyKey, never> ? [] : Array<S[keyof S]>;
}
