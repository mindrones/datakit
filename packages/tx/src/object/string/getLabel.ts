import * as _ from 'lamb';

/**
 * Retrieve the 'label' property of the provided object.
 *
 * @example
 * > getLabel({label: 'foo', value: 42})
 * 'foo'
 */
export const getLabel = _.getKey('label');
