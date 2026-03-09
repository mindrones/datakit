import * as _ from 'lamb';

import {toFloatOrIdentity} from '../../generic/generic/toFloatOrIdentity';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return the object with values converted to numbers where possible.
 *
 * @example
 * > mapValuesToFloatPossibly({a: '1.2', b: '2px', c: 'h2o'})
 * {a: 1.2, b: 2, c: 'h2o'}
 *
 * @since 0.1.0
 */
export const mapValuesToFloatPossibly: Fn<Obj<string>, Obj<number | string>> =
	_.mapValuesWith(toFloatOrIdentity);
