declare module 'lamb' {
	function add(a: number): (b: number) => number;

	function clamp(n: number, min: number, max: number): number;

	function clampWithin(min: number, max: number): (n: number) => number;

	function deduct(a: number): (b: number) => number;

	function divide(a: number, b: number): number;

	function divideBy(b: number): (a: number) => number;

	function generate<T, U, N extends number>(
		start: T,
		len: N,
		iteratee: ListIteratorCallback<Array<T>, U>
	): Array<U> & {length: N};

	function isFinite(value: number): boolean;

	function isInteger(value: any): boolean;

	function isSafeInteger(value: any): boolean;

	function mean(numbers: number[]): number;

	function median(numbers: number[]): number;

	function modulo(a: number, b: number): number;

	function multiply(a: number, b: number): number;

	function multiplyBy(b: number): (a: number) => number;

	function randomInt(min: number, max: number): number;

	/* step is optional */
	function range(start: number, limit: number, step?: number): number[];

	function remainder(numbers: number[]): number;

	function subtract(a: number, b: number): number;

	function sum(a: number, b: number): number;
}
