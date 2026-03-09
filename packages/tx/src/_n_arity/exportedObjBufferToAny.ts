import {exportedJsObjToAny} from '../string/generic/exportedJsObjToAny';

/**
 * Decode a TypedArray buffer and parse it as a JS object, stripping any `export default` prefix.
 *
 * @example
 * > encoder = new TextEncoder()
 * > buffer = encoder.encode('export default {"a": 1}')
 * > exportedObjBufferToAny(buffer)
 * {a: 1}
 *
 * @since 0.1.0
 */
export const exportedObjBufferToAny =
	(buffer: BufferSource, encoding = 'utf-8'): unknown => {
		const decoder = new TextDecoder(encoding);
		return exportedJsObjToAny(decoder.decode(buffer));
	};
