import type {ObjV} from '@datakit/types';

import {getValue} from '../../object/generic/getValue';

/**
 * Pluck the `value` property value from an array of objects.
 *
 * @example
 * > pluckValue([{key: 'John', value: 'Foo'}, {key: 'Jane', value: 'Bar'}])
 * ['Foo', 'Bar']
 *
 * @since 0.1.0
 */
export const pluckValue = <V, T extends ObjV<V>>(items: T[]): V[] =>
	items.map(getValue);
