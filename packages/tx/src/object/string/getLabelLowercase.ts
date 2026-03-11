import * as _ from 'lamb';

import type {ObjL} from '@datakit/types';

import {getLabel} from './getLabel';

/**
 * Retrieve the 'label' property of the provided object, lowercased.
 * Returns an empty string if label is undefined.
 *
 * @example
 * > getLabelLowercase({label: 'Foo', value: 42})
 * 'foo'
 * > getLabelLowercase({value: 42})
 * ''
 */
export const getLabelLowercase = _.pipe<Partial<ObjL>, string>([
	getLabel,
	(label: string) => label?.toLowerCase() ?? '',
]);
