import * as _ from 'lamb';

/**
 * Return a string joining the provided array items with a return
 * @see {@link https://ascartabelli.github.io/lamb/module-lamb.html#joinWith|joinWith}
 *
 * @function
 * @param {Array} array
 * @returns {string}
 *
 * @example
> joinWithNewline([1, 2, 3])
'1\n2\n3'
> joinWithNewline(['a', 'b', 'c'])
'a\nb\nc'
 *
 * @since 0.1.0
 */
export const joinWithNewline = _.joinWith('\n');
