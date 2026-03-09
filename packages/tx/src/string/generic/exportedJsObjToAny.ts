/**
 * Parse a JS module string (possibly prefixed with `export default `) and
 * return the resulting value.
 *
 * @example
 * > exportedJsObjToAny('export default {"a":1}')
 * {a: 1}
 * > exportedJsObjToAny('{"a":1}')
 * {a: 1}
 *
 * @since 0.1.0
 */
// TODO test, document
export const exportedJsObjToAny = (jsStr: string): unknown => {
	let jsonStr = jsStr;

	if (jsonStr.startsWith('export default ')) {
		jsonStr = jsStr.slice(15);
	}
	if (jsonStr.endsWith('\n')) {
		jsonStr = jsonStr.slice(0, -1);
	}
	if (jsonStr.endsWith(';')) {
		jsonStr = jsonStr.slice(0, -1);
	}

	return JSON.parse(jsonStr) as unknown;
};
