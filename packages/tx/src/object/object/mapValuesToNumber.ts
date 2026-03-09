import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return a copy of the object with values converted to numbers.
 *
 * @example
 * > mapValuesToNumber({a: '1.2', b: '2'})
 * {a: 1.2, b: 2}
 * > mapValuesToNumber({a: '1.2', b: '2s'})
 * {a: 1.2, b: NaN}
 *
 * @since 0.1.0
 */
export const mapValuesToNumber: Fn<Obj<any>, Obj<number>> =
	_.mapValuesWith(Number);
