import type {ObjK} from '@datakit/types';

import {getKey} from '../../object/generic/getKey';

/**
 * Pluck the `key` property value from an array of objects.
 *
 * @example
 * > pluckKey([{key: 'John', value: 'Foo'}, {key: 'Jane', value: 'Bar'}])
 * ['John', 'Jane']
 *
 * @since 0.1.0
 */
export const pluckKey = <T extends ObjK>(items: T[]): string[] =>
	items.map(getKey);
