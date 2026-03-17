import type {Fn} from './function';

/**
 * A type representing an object with string keys and values of type T.
 *
 * @example
 * type User = Obj<string>;
 * const users: User[] = [
 *   { id: '1', name: 'Alice' },
 *   { id: '2', name: 'Bob' },
 * ];
 *
 * @since 0.1.0
 */
export type Obj<T> = Record<string, T>;

/**
 * In this library we have a number of functions expecting objects with specific
 * keys `key`, `label`, `value`/`values` and their combinations and optional additional
 * properties.
 */

/* {key, value} */

/**
 * An object with a `key` property and optional additional properties.
 * Useful for representing items in a list or options in a dropdown.
 *
 * @example
 * type UserOption = ObjK<{ name: string }>;
 * const userOptions: UserOption[] = [
 *   { key: '1', name: 'Alice' },
 *   { key: '2', name: 'Bob' },
 * ];
 *
 * @since 0.1.0
 */
export type ObjK<Rest extends Obj<any> = Obj<unknown>> = {
	key: string;
} & Partial<Rest>;

/**
 * An object with a `label` property and optional additional properties.
 * Useful for representing items in a list or options in a dropdown.
 *
 * @example
 * type UserOption = ObjL<{ id: string }>;
 * const userOptions: UserOption[] = [
 *   { label: 'Alice', id: '1' },
 *   { label: 'Bob', id: '2' },
 * ];
 *
 * @since 0.1.0
 */
export type ObjL<Rest extends Obj<any> = Obj<unknown>> = {
	label: string;
} & Partial<Rest>;

/**
 * An object with a `value` property of type VType and optional additional properties.
 * Useful for representing items in a list or options in a dropdown.
 *
 * @example
 * type UserOption = ObjV<number, { name: string }>;
 * const userOptions: UserOption[] = [
 *   { value: 1, name: 'Alice' },
 *   { value: 2, name: 'Bob' },
 * ];
 *
 * @since 0.1.0
 */
export type ObjV<VType, Rest extends Obj<any> = Obj<unknown>> = {
	value: VType;
} & Partial<Rest>;

/**
 * An object with `key`, `label` properties and optional additional properties.
 * Useful for representing items in a list or options in a dropdown.
 *
 * @example
 * type UserOption = ObjKL<{ age: number }>;
 * const userOptions: UserOption[] = [
 *   { key: '1', label: 'Alice', age: 25 },
 *   { key: '2', label: 'Bob', age: 30 },
 * ];
 *
 * @since 0.1.0
 */
export interface ObjKL extends ObjK, ObjL {};

/**
 * An object with `key`, `value` properties and optional additional properties.
 * Useful for representing items in a list or options in a dropdown.
 *
 * @example
 * type UserOption = ObjKV<number, { name: string }>;
 * const userOptions: UserOption[] = [
 *   { key: '1', value: 25, name: 'Alice' },
 *   { key: '2', value: 30, name: 'Bob' },
 * ];
 *
 * @since 0.1.0
 */
export interface ObjKV<VType> extends ObjK, ObjV<VType> {};

/**
 * An object with `label`, `value` properties and optional additional properties.
 * Useful for representing items in a list or options in a dropdown.
 *
 * @example
 * type UserOption = ObjLV<number, { name: string }>;
 * const userOptions: UserOption[] = [
 *   { label: 'Alice', value: 25, name: 'Alice' },
 *   { label: 'Bob', value: 30, name: 'Bob' },
 * ];
 *
 * @since 0.1.0
 */
export interface ObjLV<VType> extends ObjL, ObjV<VType> {};

/**
 * An object with `key`, `label`, `value` properties and optional additional properties.
 * Useful for representing items in a list or options in a dropdown.
 *
 * @example
 * type UserOption = ObjKLV<number, { age: number }>;
 * const userOptions: UserOption[] = [
 *   { key: '1', value: 25, label: 'Alice', age: 25 },
 *   { key: '2', value: 30, label: 'Bob', age: 30 },
 * ];
 *
 * @since 0.1.0
 */
export interface ObjKLV<VType> extends ObjK, ObjL, ObjV<VType> {};

/* {key, values} */

/**
 * An object with a `values` property of type VType[] and optional additional properties.
 * Useful for representing items in a list or options in a dropdown.
 *
 * @example
 * type UserOption = ObjVs<number, { name: string }>;
 * const userOptions: UserOption[] = [
 *   { values: [1, 2], name: 'Alice' },
 *   { values: [3, 4], name: 'Bob' },
 * ];
 *
 * @since 0.1.0
 */
export type ObjVs<VType, Rest extends Obj<any> = Obj<unknown>> = {
	values: VType[];
} & Partial<Rest>;

/**
 * An object with `key`, `values` properties and optional additional properties.
 * Useful for representing items in a list or options in a dropdown.
 *
 * @example
 * type UserOption = ObjKVs<number, { name: string }>;
 * const userOptions: UserOption[] = [
 *   { key: '1', values: [25, 30], name: 'Alice' },
 *   { key: '2', values: [30, 35], name: 'Bob' },
 * ];
 *
 * @since 0.1.0
 */
export interface ObjKVs<VType> extends ObjK, ObjVs<VType> {};

/**
 * An object with `label`, `values` properties and optional additional properties.
 * Useful for representing items in a list or options in a dropdown.
 *
 * @example
 * type UserOption = ObjLVs<number, { name: string }>;
 * const userOptions: UserOption[] = [
 *   { label: 'Alice', values: [25, 30], name: 'Alice' },
 *   { label: 'Bob', values: [30, 35], name: 'Bob' },
 * ];
 *
 * @since 0.1.0
 */
export interface ObjLVs<VType> extends ObjL, ObjVs<VType> {};

/**
 * An object with `key`, `label`, `values` properties and optional additional properties.
 * Useful for representing items in a list or options in a dropdown.
 *
 * @example
 * type UserOption = ObjKLVs<number, { age: number }>;
 * const userOptions: UserOption[] = [
 *   { key: '1', label: 'Alice', values: [25, 30], age: 25 },
 *   { key: '2', label: 'Bob', values: [30, 35], age: 30 },
 * ];
 *
 * @since 0.1.0
 */
export interface ObjKLVs<VType> extends ObjK, ObjL, ObjVs<VType> {};

/**
 * A map of functions — an object whose values are functions accepting any
 * single input and returning an opaque result.
 * Used in higher-order functions like `applyFnMap`, `transformValues`, etc.
 *
 * @example
 * const fmt: FnMap = {
 *	name: obj => obj.first + ' ' + obj.last,
 *	score: obj => roundTo2(obj.rawScore),
 * };
 *
 * @since 0.1.0
 */
export type FnMap = Obj<Fn<any, unknown>>;
