import * as _ from 'lamb';

/**
 * Retrieve the 'values' property of the provided object.
 *
 * @example
 * > getValues({key: 'foo', values: [0, 1, 2, 3]})
 * [0, 1, 2, 3]
 *
 * @since 0.1.0
 */
export const getValues = _.getKey('values');
