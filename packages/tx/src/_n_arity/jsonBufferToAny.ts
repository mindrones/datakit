/**
 * Decode a TypedArray buffer and parse it as JSON.
 *
 * @example
 * > encoder = new TextEncoder()
 * > buffer = encoder.encode('{"a": 1}')
 * > jsonBufferToAny(buffer)
 * {a: 1}
 *
 * @since 0.1.0
 */
export const jsonBufferToAny = (buffer: BufferSource, encoding = 'utf-8'): unknown => {
	const decoder = new TextDecoder(encoding);
	return JSON.parse(decoder.decode(buffer));
};
