import type {Fn} from '@datakit/types';

/**
 * Return a string representation of the input with indentation = 2.
 *
 * @example
 * > stringify([{a: 1}, {a: 2}])
 * '[\n  {\n    "a": 1\n  },\n  {\n    "a": 2\n  }\n]'
 *
 * @since 0.1.0
 */
export const stringify: Fn<unknown, string> = x => JSON.stringify(x, null, 2);
