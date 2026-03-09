import * as _ from 'lamb';

import type {Fn, Obj} from '@datakit/types';

/**
 * Return a copy of the object with values converted to float.
 *
 * @example
 * > mapValuesToFloat({a: '1.2px', b: '20px'})
 * {a: 1.2, b: 20}
 * > mapValuesToFloat({a: '1.2', b: 'h2o'})
 * {a: 1.2, b: NaN}
 *
 * @since 0.1.0
 */
export const mapValuesToFloat: Fn<Obj<string>, Obj<number>> =
	_.mapValuesWith(parseFloat);
