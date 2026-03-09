import * as _ from 'lamb';

/**
 * Retrieve the 'value' property of the provided object.
 *
 * @example
 * > getValue({key: 'foo', value: 'bar'})
 * 'bar'
 *
 * @since 0.1.0
 */
export const getValue = _.getKey('value');
