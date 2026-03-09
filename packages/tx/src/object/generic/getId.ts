import * as _ from 'lamb';

/**
 * Retrieve the 'id' property of the provided object.
 *
 * @example
 * > getId({id: 'foo', name: 'bar'})
 * 'foo'
 *
 * @since 0.1.0
 */
export const getId = _.getKey('id');
