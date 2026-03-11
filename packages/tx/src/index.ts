/* N-arity functions */

export * from './_n_arity';

/* Sorters */

export * from './_sorters';

/* Unarity functions */

// fn: (any->any) -> output
export * from './any-any/any-boolean';
export * from './any-any/array-boolean';
export * from './any-any/iterable-object';
export * from './any-any/object-array';
export * from './any-any/object-boolean';
export * from './any-any/object-object';

// fn: (any->array) -> output
export * from './any-array/any-array';
export * from './any-array/array-object';

// fn: (any->boolean) -> output
export * from './any-boolean/array-array';
export * from './any-boolean/object-generic';

// fn: (any->number) -> output
export * from './any-number/array-number';
export * from './any-number/object-number';

// fn: (any->object) -> output
export * from './any-object/array-object';

// array -> iterable
export * from './array/iterable';

// array -> output
export * from './array/array';
export * from './array/array-array';
export * from './array/array-object';
export * from './array/boolean';
export * from './array/generic';
export * from './array/generic-boolean';
export * from './array/generic-generic';
export * from './array/generic-object';
export * from './array/number';
export * from './array/number-boolean';
export * from './array/number-number';
export * from './array/object';
export * from './array/object-array';
export * from './array/object-boolean';
export * from './array/object-object';
export * from './array/string';
export * from './array/string-boolean';
export * from './array/string-string';

// iterable -> output
export * from './iterable/boolean';
export * from './iterable/number';

// generic -> output
export * from './generic/any-boolean';
export * from './generic/array-object';
export * from './generic/boolean';
export * from './generic/generic';
export * from './generic/object-boolean';
export * from './generic/string';
export * from './generic/undefined';

// number -> output
export * from './number/boolean';
export * from './number/number';
export * from './number/number-number';
export * from './number/string';

// object -> output
export * from './object/array';
export * from './object/string';
export * from './object/boolean';
export * from './object/generic';
export * from './object/generic-object';
export * from './object/number';
export * from './object/object';
export * from './object/object-object';
export * from './object/string-boolean';

// regexp -> output
export * from './regexp/boolean';

// fn: (string->boolean) -> output
export * from './string-boolean/object-boolean';
export * from './string-boolean/object-object';

// fn: (string->string) -> output
export * from './string-string/object-object';

// string -> output
export * from './string/array';
export * from './string/array-array';
export * from './string/array-object';
export * from './string/array-number';
export * from './string/boolean';
export * from './string/generic';
export * from './string/number';
export * from './string/object-number';
export * from './string/regexp';
export * from './string/string';
export * from './string/string-array';
export * from './string/string-boolean';
export * from './string/string-regexp';
export * from './string/string-string';

/* commodity re-export */

export {default as areEquals} from 'just-compare';
