declare module 'lamb' {
	function padLeft(source: string, char: string, len: number): string;

	function padRight(source: string, char: string, len: number): string;

	function repeat(source: string, times: number): string;

	function replace(
		needle: RegExp | string,
		sub: string | AnyFunction<string>
	): (haystack: string) => string;

	function split(source: string, separator: string | RegExp): string[];

	function splitBy(separator: string | RegExp): (source: string) => string[];

	function testWith(pattern: RegExp): (source: string) => boolean;
}
