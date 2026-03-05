declare module 'lamb' {
	function isInstanceOf<T, U extends T>(
		ctor: Constructor<U>
	): (source: T) => source is U;

	function isNil(value: any): value is null | undefined;

	function isNull(value: any): value is null;

	function isUndefined(value: any): value is undefined;

	function type(value: any): string;

	function isType<T, U extends T>(typeName: string): Predicate<T, U>;
	function isType(typeName: string): (source: any) => boolean;
}
