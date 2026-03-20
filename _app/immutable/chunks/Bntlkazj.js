import{$ as e,E as t,O as n,P as r,R as i,T as a,U as o,Y as s,f as c,j as l,k as u,m as d,nt as f,ot as p,q as m,rt as h,w as g}from"./BgRcjskr.js";import{t as _}from"./B7pakmdS.js";import{n as v}from"./CqFA2_4u.js";var y={categories:[{functions:[{description:`Return a function returning true if the accessed value is an array`,examples:[`> isArrayWith(getValue)({key: 'a', value: [1, 2]})
true`],filePath:`any-any/any-boolean/isArrayWith.ts`,lineNumber:16,name:`isArrayWith`,since:`0.1.0`},{description:`Return a function returning true if the accessed value is null or undefined`,examples:[`> isNilWith(getValue)({key: 'a', value: null})
true
> isNilWith(getValue)({key: 'a'})
true`],filePath:`any-any/any-boolean/isNilWith.ts`,lineNumber:16,name:`isNilWith`,since:`0.1.0`},{description:`Return a function returning true if the accessed value is not NaN`,examples:[`> isNotNaNWith(getValue)({key: 'a', value: 1})
true`],filePath:`any-any/any-boolean/isNotNaNWith.ts`,lineNumber:14,name:`isNotNaNWith`,since:`0.1.0`},{description:`Return a function returning true if the accessed value is not null or undefined`,examples:[`> isNotNilWith(getValue)({key: 'a', value: 1})
true`],filePath:`any-any/any-boolean/isNotNilWith.ts`,lineNumber:14,name:`isNotNilWith`,since:`0.1.0`},{description:`Return a function returning true if the accessed value is not null`,examples:[`> isNotNullWith(getValue)({key: 'a', value: 1})
true`],filePath:`any-any/any-boolean/isNotNullWith.ts`,lineNumber:14,name:`isNotNullWith`,since:`0.1.0`},{description:`Return a function returning true if the accessed value is null`,examples:[`> isNullWith(getValue)({key: 'a', value: null})
true`],filePath:`any-any/any-boolean/isNullWith.ts`,lineNumber:13,name:`isNullWith`,since:`0.1.0`},{description:`Return a function returning true if the accessed value is a number`,examples:[`> isNumberWith(getValue)({key: 'a', value: 1})
true
> isNumberWith(getValue)({key: 'a', value: 'a'})
false`],filePath:`any-any/any-boolean/isNumberWith.ts`,lineNumber:16,name:`isNumberWith`,since:`0.1.0`},{description:`Return a function returning true if the accessed value is an object`,examples:[`> isObjectWith(getValue)({key: 'a', value: {a: 1}})
true
> isObjectWith(getValue)({key: 'a', value: 'a'})
false`],filePath:`any-any/any-boolean/isObjectWith.ts`,lineNumber:16,name:`isObjectWith`,since:`0.1.0`},{description:`Return a function returning true if the accessed value is a string`,examples:[`> isStringWith(getValue)({key: 'a', value: 'a'})
true
> isStringWith(getValue)({key: 'a', value: 1})
false`],filePath:`any-any/any-boolean/isStringWith.ts`,lineNumber:16,name:`isStringWith`,since:`0.1.0`},{description:`Return a function returning true if the accessed value can be turned into a valid number via parseFloat()`,examples:[`> isToFloatValidNumberWith(getValue)({key: 'a', value: [1]})
true
> isToFloatValidNumberWith(getValue)({key: 'a', value: []})
false`],filePath:`any-any/any-boolean/isToFloatValidNumberWith.ts`,lineNumber:16,name:`isToFloatValidNumberWith`,since:`0.1.0`},{description:`Return a function returning true if the accessed value can be turned into a valid number via Number()`,examples:[`> isToNumberValidNumberWith(getValue)({key: 'a', value: '123'})
true
> isToNumberValidNumberWith(getValue)({key: 'a', value: '123px'})
false`],filePath:`any-any/any-boolean/isToNumberValidNumberWith.ts`,lineNumber:16,name:`isToNumberValidNumberWith`,since:`0.1.0`},{description:`Return a function returning true if the accessed value is undefined`,examples:[`> isUndefinedWith(getValue)({key: 'a', value: 'a'})
false
> isUndefinedWith(getValue)({key: 'a', value: 1})
false`],filePath:`any-any/any-boolean/isUndefinedWith.ts`,lineNumber:15,name:`isUndefinedWith`,since:`0.1.0`},{description:`Return a function returning true if the accessed value is a valid number`,examples:[`> isValidNumberWith(getValue)({key: 'a', value: 'a'})
false
> isValidNumberWith(getValue)({key: 'a', value: 1})
true`],filePath:`any-any/any-boolean/isValidNumberWith.ts`,lineNumber:16,name:`isValidNumberWith`,since:`0.1.0`}],id:`any-any/any-boolean`,inputType:`any-any`,label:`any-any → any-boolean`,outputType:`any-boolean`},{functions:[{description:"Return a function returning `true` if all the items of an array are equal\nonce processed with the provided `fn`",examples:[`> areEqualByValue = areEqualWith(getValue)
> areEqualByValue([{key: 'a', value: 1}, {key: 'b', value: 1}])
true
> areEqualByValue([{key: 'a', value: 1}, {key: 'b', value: 2}])
false
> areEqualByValue([{key: 'a', value: 1}])
false
> areEqualByValue([])
false`],filePath:`any-any/array-boolean/areEqualWith.ts`,lineNumber:21,name:`areEqualWith`,since:`0.1.0`}],id:`any-any/array-boolean`,inputType:`any-any`,label:`any-any → array-boolean`,outputType:`array-boolean`},{functions:[{description:"Return a function expecting a pair and returning a {key, value} object\nusing the provided `fn` to get the `value`.",examples:[`> objectifySelfSum = pairToKeyValueObjectWith(x => x + x)

> objectifySelfSum('')
{key: undefined, value: undefined}
> objectifySelfSum('a')
{key: 'a', value: undefined}
> objectifySelfSum('ab')
{key: 'a', value: 'bb'}
> objectifySelfSum('abc')
{key: 'a', value: 'bb'}


> objectifyGetA = pairToKeyValueObjectWith(_.getKey('a'))

> objectifyGetA([])
{key: undefined, value: undefined}
> objectifyGetA([1])
{key: 1, value: undefined}
> objectifyGetA([1, {a: 2}])
{key: 1, value: 2}
> objectifyGetA([1, {a: 2}, 3])
{key: 1, value: 2}

> function func () {
	return objectifyGetA(arguments);
}
> func()
{key: undefined, value: undefined}
> func(1)
{key: 1, value: undefined}
> func(1, {a: 2})
{key: 1, value: 2}
> func(1, {a: 2}, 3)
{key: 1, value: 2}`],filePath:`any-any/iterable-object/pairToKeyValueObjectWith.ts`,lineNumber:45,name:`pairToKeyValueObjectWith`,since:`0.1.0`}],id:`any-any/iterable-object`,inputType:`any-any`,label:`any-any → iterable-object`,outputType:`iterable-object`},{functions:[{description:"Return a function expecting an object and returning an array of {key, value}\nobjects, using the provided `fn` to get the `value` of each object.",examples:[`> obj = {k1: {a: 1}, k2: {a: 2}}
> convertToArray = objectToKeyValueArrayWith(_.getKey('a'))
> convertToArray(obj)
[{key: 'k1', value: 1}, {key: 'k2', value: 2}]`],filePath:`any-any/object-array/objectToKeyValueArrayWith.ts`,lineNumber:19,name:`objectToKeyValueArrayWith`,since:`0.1.0`},{description:`Return a function expecting an object and returning an array of its values
processed with the provided function.
The accessor receives (value, key) so keys can be used in the transformation.`,examples:[`> triplicatedValues = valuesWith(_.add(3));
> triplicatedValues({a: 1, b: 2, c: 3})
[4, 5, 6]

> getFoos = valuesWith(_.getKey('foo'));
> getFoos({a: {foo: 1, bar: 2}, b: {foo: 15, bar: -3}})
[1, 15]

> keysAndValues = valuesWith((value, key) => \`\${value} (\${key})\`);
> keysAndValues({a: 3, b: 5})
['3 (a)', '5 (b)']`],filePath:`any-any/object-array/valuesWith.ts`,lineNumber:25,name:`valuesWith`,since:`0.1.0`}],id:`any-any/object-array`,inputType:`any-any`,label:`any-any → object-array`,outputType:`object-array`},{functions:[{description:"Return a function expecting an object and returning `true` if its values,\nonce processed with the provided `fn` function, are all equal.",examples:[`> areValuesEqual = areValuesEqualWith(getValue)
> areValuesEqual({a: {key: 'a', value: 1}, b: {key: 'b', value: 1}})
true
> areValuesEqual({a: {key: 'a', value: 1}, b: {key: 'b', value: 2}})
false`],filePath:`any-any/object-boolean/areValuesEqualWith.ts`,lineNumber:20,name:`areValuesEqualWith`,since:`0.1.0`}],id:`any-any/object-boolean`,inputType:`any-any`,label:`any-any → object-boolean`,outputType:`object-boolean`},{functions:[{description:`Return a function expecting an object and returning an object grouping its
values using the provided \`fn\`.
Values that are arrays are flattened before grouping.`,examples:[`> regroupedByX = groupValuesWith(obj => obj.x)
> regroupedByX({a: {x: 1, y: 2}, b: {x: 3, y: 4}, c: {x: 'a', y: 6}, d: {x: 1, y: 8}})
{1: [{x: 1, y: 2}, {x: 1, y: 8}], 3: [{x: 3, y: 4}], a: [{x: 'a', y: 6}]}`],filePath:`any-any/object-object/groupValuesWith.ts`,lineNumber:17,name:`groupValuesWith`,since:`0.1.0`},{description:`Return a function expecting an object and returning an index of all its
values using the provided \`fn\`.
Use this if you're sure that applying the \`fn\` on the object values
returns unique strings.
Values that are arrays are flattened before indexing.`,examples:[`> reindexedByX = indexValuesWith(obj => obj.x)
> reindexedByX({a: {x: 'u1', y: 2}, b: {x: 'u2', y: 4}})
{u1: {x: 'u1', y: 2}, u2: {x: 'u2', y: 4}}`],filePath:`any-any/object-object/indexValuesWith.ts`,lineNumber:19,name:`indexValuesWith`,since:`0.1.0`}],id:`any-any/object-object`,inputType:`any-any`,label:`any-any → object-object`,outputType:`object-object`},{functions:[{description:"Return a function returning the pair-permutations of the items returned by the provided `fn`.",examples:[`> object = {
  key: 'foobars',
  value: [{foo: 'a'}, {foo: 'b'}, {bar: 'c'}, {bar: 'd'}]
}
> makeBiPermutations = makeBiPermutationsWith(getValue)
[
  [{foo: 'a'}, {foo: 'b'}],
  [{foo: 'a'}, {bar: 'c'}],
  [{foo: 'a'}, {bar: 'd'}],
  [{foo: 'b'}, {bar: 'c'}],
  [{foo: 'b'}, {bar: 'd'}],
  [{bar: 'c'}, {bar: 'd'}]
]`],filePath:`any-array/any-array/makeBiPermutationsWith.ts`,lineNumber:25,name:`makeBiPermutationsWith`,since:`0.1.0`}],id:`any-array/any-array`,inputType:`any-array`,label:`any-array → any-array`,outputType:`any-array`},{functions:[{description:`Return a function expecting an array and returning an object
with keys and values defined by the provided function, which expects a value
and returns a pair [key, value].`,examples:["> valueToPair = x => [`${x}${x}`, `${x}${x}${x}`];\n> arrayToObject1 = makeArrayToObjectWith(valueToPair)\n> arrayToObject1(['a', 'b', 1])\n{aa: 'aaa', bb: 'bbb', 11: '111'}\n\n> valueIndexToPair = (x, i) => [`${i}${i}`, `${x}${x}${x}`];\n> arrayToObject2 = makeArrayToObjectWith(valueIndexToPair)\n> arrayToObject2(['a', 'b', 1])\n{'00': 'aaa', '11': 'bbb', '22': '111'}"],filePath:`any-array/array-object/makeArrayToObjectWith.ts`,lineNumber:23,name:`makeArrayToObjectWith`,since:`0.1.0`}],id:`any-array/array-object`,inputType:`any-array`,label:`any-array → array-object`,outputType:`array-object`},{functions:[{description:`Return a function expecting an array and returning a new array with all items
satisfying the provided predicate in the tail, in the same relative order
they were in the input array.`,examples:[`> raiseOdds = raiseWith(x => x % 2 === 1);
> raiseOdds([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
[0, 2, 4, 6, 8, 1, 3, 5, 7, 9]`],filePath:`any-boolean/array-array/raiseWith.ts`,lineNumber:19,name:`raiseWith`,since:`0.1.0`}],id:`any-boolean/array-array`,inputType:`any-boolean`,label:`any-boolean → array-array`,outputType:`array-array`},{functions:[{description:`Return a function expecting an object and returning the first of its values
satisfying the provided predicate.`,examples:[`> findFirstOdd = findValueWith(x => x % 2 === 1);
> findFirstOdd({a: 2, b: 4, c: 3, d: 6, e: 7})
3
> findItem = findValueWith(isKeyValue(['max', 10]))
> findItem({a: {id: 'foo', min: 1, max: 2}, b: {id: 'bar', min: -1, max: 10}, c: {id: 'baz', min: -4, max: 10}})
{id: 'bar', min: -1, max: 10}`],filePath:`any-boolean/object-generic/findValueWith.ts`,lineNumber:19,name:`findValueWith`,since:`0.1.0`}],id:`any-boolean/object-generic`,inputType:`any-boolean`,label:`any-boolean → object-generic`,outputType:`object-generic`},{functions:[{description:`Return a function expecting an array and returning the max of results
of applying the provided function on all of the array items.`,examples:[`> maxWithAbsSin = arrayMaxWith(_.pipe([Math.sin, Math.abs]))
> maxWithAbsSin([-Math.PI/2, -Math.PI/4])
1
> maxWithAbsSin([Math.PI/4, Math.PI/6])
0.7071067811865475`],filePath:`any-number/array-number/arrayMaxWith.ts`,lineNumber:16,name:`arrayMaxWith`,since:`0.1.0`},{description:`Return a function expecting an array and returning the min of results
of applying the provided function on all of the array items.`,examples:[`> minWithAbsSin = arrayMinWith(_.pipe([Math.sin, Math.abs]))
> minWithAbsSin([-Math.PI/2, -Math.PI/4])
0.7071067811865475
> minWithAbsSin([Math.PI/4, Math.PI/6])
0.49999999999999994`],filePath:`any-number/array-number/arrayMinWith.ts`,lineNumber:16,name:`arrayMinWith`,since:`0.1.0`},{description:"Return a function expecting an array and summing the numbers obtained\nfrom applying the provided `fn` to the array items.",examples:[`> sumValues = arraySumWith(_.getKey('a'))
> sumValues([{a: 1}, {a: 2}, {a: 3}])
6
> sumValues([])
0`],filePath:`any-number/array-number/arraySumWith.ts`,lineNumber:16,name:`arraySumWith`,since:`0.1.0`},{description:"Return a function expecting an array and returning the average of\nthe numbers obtained by applying the provided `fn` to the array items.",examples:[`> makeAverageOfA = makeAverageWith(_.getKey('a'));
> makeAverageOfA([{a: 1, b: 2}, {a: 10, b: 7}, {a: 7, b: 9}])
6
> makeAverageOfA([])
0`],filePath:`any-number/array-number/makeAverageWith.ts`,lineNumber:18,name:`makeAverageWith`,since:`0.1.0`}],id:`any-number/array-number`,inputType:`any-number`,label:`any-number → array-number`,outputType:`array-number`},{functions:[{description:`Return a function expecting an object, applying the provided function to its
values and returning the largest of the results.`,examples:[`> maxWithAbsSin = valuesMaxWith(_.pipe([Math.sin, Math.abs]))
> maxWithAbsSin({a: -Math.PI/2, b: -Math.PI/4})
1
> maxWithAbsSin({a: -Math.PI/4, b: -Math.PI/6})
0.7071067811865475`],filePath:`any-number/object-number/valuesMaxWith.ts`,lineNumber:20,name:`valuesMaxWith`,since:`0.1.0`},{description:`Return a function expecting an object, applying the provided function to its
values and returning the lowest of the results.`,examples:[`> minWithAbsSin = valuesMinWith(_.pipe([Math.sin, Math.abs]))
> minWithAbsSin({a: -Math.PI/2, b: -Math.PI/4})
0.7071067811865475
> minWithAbsSin({a: -Math.PI/4, b: -Math.PI/6})
0.49999999999999994`],filePath:`any-number/object-number/valuesMinWith.ts`,lineNumber:20,name:`valuesMinWith`,since:`0.1.0`}],id:`any-number/object-number`,inputType:`any-number`,label:`any-number → object-number`,outputType:`object-number`},{functions:[{description:`Return a function expecting an array and returning an object of occurrences
of all the keys contained in the property reachable with the provided \`fn\`
in the items of the provided array.`,examples:[`> items = [
  {foo: 1, bar: {a: 1}},
  {foo: 1, bar: {a: 6, b: -1}},
  {foo: 1, bar: {a: 2, b: 0, c: 1}},
  {foo: 1, bar: {c: 4, e: 2}},
]
> makeAllOccurrences = makeAllOccurrencesWith(_.getKey('bar'))
> makeAllOccurrences(items)
{a: 3, b: 2, c: 2, e: 1}`],filePath:`any-object/array-object/makeAllOccurrencesWith.ts`,lineNumber:21,name:`makeAllOccurrencesWith`,since:`0.1.0`}],id:`any-object/array-object`,inputType:`any-object`,label:`any-object → array-object`,outputType:`array-object`},{functions:[{description:`Return an array containing the first and the last element of the provided array.`,examples:[`> getFirstAndLast([0, 1, 2, 3, 4])
[0, 4]
> getFirstAndLast([0])
[0, 0]
> getFirstAndLast([])
[undefined, undefined]`],filePath:`array/array/getFirstAndLast.ts`,lineNumber:18,name:`getFirstAndLast`,since:`0.1.0`},{description:`Return the range within the provided limits, both limits being included.`,examples:[`> inclusiveRange([2, 5])
[2, 3, 4, 5]
> inclusiveRange([2, 12, 2])
[2, 4, 6, 8, 10, 12]
> inclusiveRange([])
[]`],filePath:`array/array/inclusiveRange.ts`,lineNumber:16,name:`inclusiveRange`,since:`0.1.0`},{description:`Return the permutations of pairs of the provided items.`,examples:[`> makeBiPermutations([{foo: 'a'}, {foo: 'b'}, {bar: 'c'}])
[[{foo: 'a'}, {foo: 'b'}], [{foo: 'a'}, {bar: 'c'}], [{foo: 'b'}, {bar: 'c'}]]`],filePath:`array/array/makeBiPermutations.ts`,lineNumber:12,name:`makeBiPermutations`,since:`0.1.0`},{description:"Pluck the `key` property value from an array of objects.",examples:[`> pluckKey([{key: 'John', value: 'Foo'}, {key: 'Jane', value: 'Bar'}])
['John', 'Jane']`],filePath:`array/array/pluckKey.ts`,lineNumber:14,name:`pluckKey`,since:`0.1.0`},{description:"Pluck the `value` property value from an array of objects.",examples:[`> pluckValue([{key: 'John', value: 'Foo'}, {key: 'Jane', value: 'Bar'}])
['Foo', 'Bar']`],filePath:`array/array/pluckValue.ts`,lineNumber:14,name:`pluckValue`,since:`0.1.0`},{description:`Return a copy of the provided array sorted in descending order.`,examples:[`> sortDesc([3, 1, 2])
[3, 2, 1]`],filePath:`array/array/sortDesc.ts`,lineNumber:12,name:`sortDesc`,since:`0.3.0`},{description:"Return a copy of the provided array of key-value objects sorted by `key` (ascending).",examples:[`> sortKeyAsc([{key: 'b', value: 1}, {key: 'a', value: 2}])
[{key: 'a', value: 2}, {key: 'b', value: 1}]`],filePath:`array/array/sortKeyAsc.ts`,lineNumber:16,name:`sortKeyAsc`,since:`0.3.0`},{description:"Return a copy of the provided array of key-value objects sorted by `key` (descending).",examples:[`> sortKeyDesc([{key: 'a', value: 1}, {key: 'c', value: 2}, {key: 'b', value: 3}])
[{key: 'c', value: 2}, {key: 'b', value: 3}, {key: 'a', value: 1}]`],filePath:`array/array/sortKeyDesc.ts`,lineNumber:16,name:`sortKeyDesc`,since:`0.3.0`},{description:"Return a copy of the provided array of key-value objects sorted by `value` (ascending).",examples:[`> sortValueAsc([{key: 'a', value: 3}, {key: 'b', value: 1}, {key: 'c', value: 2}])
[{key: 'b', value: 1}, {key: 'c', value: 2}, {key: 'a', value: 3}]`],filePath:`array/array/sortValueAsc.ts`,lineNumber:16,name:`sortValueAsc`,since:`0.3.0`},{description:"Return a copy of the provided array with items\nsorted by `value` (ascending) then by `key` (ascending)",examples:[],filePath:`array/array/sortValueAscKeyAsc.ts`,lineNumber:14,name:`sortValueAscKeyAsc`,since:`0.1.0`},{description:"Return a copy of the provided array with items\nsorted by `value` (ascending) then by `key` (descending)",examples:[],filePath:`array/array/sortValueAscKeyDesc.ts`,lineNumber:14,name:`sortValueAscKeyDesc`,since:`0.3.0`},{description:"Return a copy of the provided array of key-value objects sorted by `value` (descending).",examples:[`> sortValueDesc([{key: 'a', value: 1}, {key: 'b', value: 3}, {key: 'c', value: 2}])
[{key: 'b', value: 3}, {key: 'c', value: 2}, {key: 'a', value: 1}]`],filePath:`array/array/sortValueDesc.ts`,lineNumber:16,name:`sortValueDesc`,since:`0.3.0`},{description:"Return a copy of the provided array with items\nsorted by `value` (descending) then by `key` (ascending)",examples:[],filePath:`array/array/sortValueDescKeyAsc.ts`,lineNumber:14,name:`sortValueDescKeyAsc`,since:`0.3.0`},{description:"Return a copy of the provided array with items\nsorted by `value` (descending) then by `key` (descending)",examples:[],filePath:`array/array/sortValueDescKeyDesc.ts`,lineNumber:13,name:`sortValueDescKeyDesc`,since:`0.3.0`},{description:"Return a copy of the provided array sorted by `value` (descending) then `label` (ascending).",examples:[`> sortValueDescLabelAsc([{key: 'a', label: 'z', value: 1}, {key: 'b', label: 'a', value: 1}])
[{key: 'b', label: 'a', value: 1}, {key: 'a', label: 'z', value: 1}]`],filePath:`array/array/sortValueDescLabelAsc.ts`,lineNumber:17,name:`sortValueDescLabelAsc`,since:`0.3.0`},{description:"Return a copy of the provided array sorted by `value` (descending) then `label` (descending).",examples:[`> sortValueDescLabelDesc([{key: 'a', label: 'a', value: 1}, {key: 'b', label: 'z', value: 1}])
[{key: 'b', label: 'z', value: 1}, {key: 'a', label: 'a', value: 1}]`],filePath:`array/array/sortValueDescLabelDesc.ts`,lineNumber:16,name:`sortValueDescLabelDesc`,since:`0.3.0`},{description:"Return a copy of the provided array sorted by `value` (descending) then `label` lowercase (ascending).",examples:[`> sortValueDescLabelLowercaseAsc([{key: 'a', label: 'Z', value: 1}, {key: 'b', label: 'a', value: 1}])
[{key: 'b', label: 'a', value: 1}, {key: 'a', label: 'Z', value: 1}]`],filePath:`array/array/sortValueDescLabelLowercaseAsc.ts`,lineNumber:17,name:`sortValueDescLabelLowercaseAsc`,since:`0.3.0`},{description:"Return a copy of the provided array sorted by `value` (descending) then `label` lowercase (descending).",examples:[`> sortValueDescLabelLowercaseDesc([{key: 'a', label: 'a', value: 1}, {key: 'b', label: 'Z', value: 1}])
[{key: 'b', label: 'Z', value: 1}, {key: 'a', label: 'a', value: 1}]`],filePath:`array/array/sortValueDescLabelLowercaseDesc.ts`,lineNumber:17,name:`sortValueDescLabelLowercaseDesc`,since:`0.3.0`}],id:`array/array`,inputType:`array`,label:`array → array`,outputType:`array`},{functions:[{description:`Return a function expecting an array and applying the provided transforms to its elements.
The result array length equals the length of the shorter of the two arrays.`,examples:[`> transformer = makeArrayTransformer([x => x * 20, x => x + 3])
> transformer([2, 2])
[40, 5]`],filePath:`array/array-array/makeArrayTransformer.ts`,lineNumber:14,name:`makeArrayTransformer`,since:`0.1.0`},{description:`Return a function plucking the provided keys from each object in the expected array.`,examples:[`> select = pluckKeys(['a', 'k'])
> select([
  {a: 1, b: 2, c: 3, k: 4},
  {a: 5, b: 8},
])
[{a: 1, k: 4}, {a: 5}]`],filePath:`array/array-array/pluckKeys.ts`,lineNumber:18,name:`pluckKeys`,since:`0.1.0`},{description:`Return a function expecting an array and removing items at the provided indices.`,examples:[`> removeIndices = removeAt([3, 4, 8])
> removeIndices([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
[0, 1, 2, 5, 6, 7, 9]`],filePath:`array/array-array/removeAt.ts`,lineNumber:14,name:`removeAt`,since:`0.1.0`}],id:`array/array-array`,inputType:`array`,label:`array → array-array`,outputType:`array-array`},{functions:[{description:`Return a function expecting an array of values and returning an object
assigning the values to the provided keys.`,examples:[`> makeWithLatLng = makeWithKeys(['lng', 'lat'])
> makeWithLatLng([1, 2])
{lng: 1, lat: 2}
> makeWithLatLng([10, 20])
{lng: 10, lat: 20}`],filePath:`array/array-object/makeWithKeys.ts`,lineNumber:18,name:`makeWithKeys`,since:`0.1.0`},{description:`Return a function expecting an array of keys and returning an object
assigning the keys to the provided values.`,examples:[`> makeWithTheseValues = makeWithValues([1, 2])
> makeWithTheseValues(['lng', 'lat'])
{lng: 1, lat: 2}
> makeWithTheseValues(['foo', 'bar'])
{foo: 1, bar: 2}`],filePath:`array/array-object/makeWithValues.ts`,lineNumber:18,name:`makeWithValues`,since:`0.1.0`}],id:`array/array-object`,inputType:`array`,label:`array → array-object`,outputType:`array-object`},{functions:[{description:`Return true if all elements of the provided array are truthy`,examples:[`> areAllTruthy([true, true])
true
> areAllTruthy([1, [], [1, 2], {}, {a: 1}, 'a'])
true
> areAllTruthy([false, true])
false
> areAllTruthy([0, {a: 1}])
false`],filePath:`array/boolean/areAllTruthy.ts`,lineNumber:20,name:`areAllTruthy`,since:`0.1.0`},{description:"Return `true` if items in the provided array are equal",examples:[`> areEqual([false, false, false])
true
> areEqual([true, false, false])
false
> areEqual([])
false
> areEqual([1])
false`],filePath:`array/boolean/areEqual.ts`,lineNumber:20,name:`areEqual`,since:`0.1.0`},{description:`Return true if some elements of the provided array are truthy`,examples:[`> areSomeTruthy([false, true])
true
> areSomeTruthy([0, ''])
false`],filePath:`array/boolean/areSomeTruthy.ts`,lineNumber:16,name:`areSomeTruthy`,since:`0.1.0`}],id:`array/boolean`,inputType:`array`,label:`array → boolean`,outputType:`boolean`},{functions:[{description:`Return a random item of the passed array`,examples:[`> getRandomItemOf([0, 1, 2, 3])
2
> getRandomItemOf([0, 1, 2, 3])
1
> getRandomItemOf([{a: 0}, {a: 1}, {a: 2}, {a: 3}])
{a: 3}
> getRandomItemOf([{a: 0}, {a: 1}, {a: 2}, {a: 3}])
{a: 0}`],filePath:`array/generic/getRandomItemOf.ts`,lineNumber:18,name:`getRandomItemOf`,since:`0.1.0`}],id:`array/generic`,inputType:`array`,label:`array → generic`,outputType:`generic`},{functions:[{description:`Return a function returning true if the passed (primitive) value is found
in the provided array.
To check non-primitive values use makeOccursIn instead.`,examples:[`> isIncluded = makeIsIncluded([1, 2, 3])
> isIncluded(1)
true
> isIncluded(4)
false`],filePath:`array/generic-boolean/makeIsIncluded.ts`,lineNumber:15,name:`makeIsIncluded`,since:`0.1.0`},{description:`Return a function returning true if the passed value is found in the provided array.
This function is ideal to check the presence of arrays or objects.
To check primitive values use makeIsIncluded instead.`,examples:[`> isOneOfThoseArrays = makeOccursIn([
  [1, 2, 3], [1, 2, 3, 4], [5, 6, 7, 6, 5]
])
> isOneOfThoseArrays([1, 2, 3])
true
> isOneOfThoseArrays([1, 2])
false`],filePath:`array/generic-boolean/makeOccursIn.ts`,lineNumber:20,name:`makeOccursIn`,since:`0.1.0`}],id:`array/generic-boolean`,inputType:`array`,label:`array → generic-boolean`,outputType:`generic-boolean`},{functions:[{description:`Return a function that maps the input to the first or the second element
of the provided pair: the first if its truthy, the second otherwise.`,examples:[`> boolToNum = truthynessTo([0, 1])
> boolToNum(true)
0
> boolToNum(false)
1

> boolToString = truthynessTo(['OK!', 'Sorry!'])
> boolToString(true)
'OK!'
> boolToString(false)
'Sorry!'`],filePath:`array/generic-generic/truthynessTo.ts`,lineNumber:20,name:`truthynessTo`,since:`0.1.0`}],id:`array/generic-generic`,inputType:`array`,label:`array → generic-generic`,outputType:`generic-generic`},{functions:[{description:`Return a function returning an object by assigning the results of the provided
functions to the provided keys.`,examples:[`> makeCircle = makeWith([
  ['radius', 'perimeter', 'area'],
  [_.identity, r => 2 * Math.PI * r, r => Math.PI * Math.pow(r, 2)]
])
> makeCircle(3)
{radius: 3, perimeter: 18.85, area: 28.27}
> makeCircle(4)
{radius: 4, perimeter: 25.13, area: 50.27}`],filePath:`array/generic-object/makeWith.ts`,lineNumber:23,name:`makeWith`,since:`0.1.0`}],id:`array/generic-object`,inputType:`array`,label:`array → generic-object`,outputType:`generic-object`},{functions:[{description:`Return the shorter iterable of the provided array of iterables.
Returns the first one in case of equal length.
Returns undefined for an empty input.`,examples:[`> getShorter([[1, 2], [1], [1, 2, 3], ['a']])
[1]
> getShorter(['abc', 'a', [1]])
'a'
> getShorter(['b', 'a'])
'b'
> getShorter([])
undefined`],filePath:`array/iterable/getShorter.ts`,lineNumber:22,name:`getShorter`,since:`0.1.0`}],id:`array/iterable`,inputType:`array`,label:`array → iterable`,outputType:`iterable`},{functions:[{description:`Return the average of the numbers in the provided array`,examples:[`> arrayAverage([1, 23, 6])
10
> arrayAverage([])
0`],filePath:`array/number/arrayAverage.ts`,lineNumber:18,name:`arrayAverage`,since:`0.1.0`},{description:`Return the max of the numbers in the provided array`,examples:[`> arrayMax([-1, -2, 0, 1, 2])
2`],filePath:`array/number/arrayMax.ts`,lineNumber:14,name:`arrayMax`,since:`0.1.0`},{description:`Return the min of the numbers in the provided array`,examples:[`> arrayMin([-1, -2, 0, 1, 2])
-2`],filePath:`array/number/arrayMin.ts`,lineNumber:14,name:`arrayMin`,since:`0.1.0`},{description:`Return the sum of the numbers in the provided array`,examples:[`> arraySum([1, -2, 3, -4, 5])
3
> arraySum([])
0`],filePath:`array/number/arraySum.ts`,lineNumber:16,name:`arraySum`,since:`0.1.0`},{description:`Return the index of a random item of the passed array`,examples:[`> getRandomIndexOf([0, 1, 2, 3])
2
> getRandomIndexOf([0, 1, 2, 3])
1`],filePath:`array/number/getRandomIndexOf.ts`,lineNumber:14,name:`getRandomIndexOf`,since:`0.1.0`},{description:`Return the average of values of a {key, value}[] array`,examples:[`> keyValueArrayAverage([
  {key: 'a', value: 1},
  {key: 'b', value: 23},
  {key: 'c', value: 6},
])
10
> keyValueArrayAverage([])
0`],filePath:`array/number/keyValueArrayAverage.ts`,lineNumber:22,name:`keyValueArrayAverage`,since:`0.1.0`},{description:`Return a random number in the specified range.`,examples:[`> makeRandomNumInRange([1.2, 7.4])
4.2`],filePath:`array/number/makeRandomNumInRange.ts`,lineNumber:12,name:`makeRandomNumInRange`,since:`0.1.0`},{description:"Calculate the number of combinations (permutations without repetition) of `n` items\ntaken in groups of size `g`. Useful for sizing matrices of scatterplots / heatmaps.\n\nFormula: C(n,g) = n! / (g! × (n-g)!)",examples:[`> permutationsCount([4, 2])
6
> permutationsCount([5, 2])
10`],filePath:`array/number/permutationsCount.ts`,lineNumber:19,name:`permutationsCount`,since:`0.3.0`},{description:"Return the sum of the `value` properties from the provided array of key-value objects.",examples:[`> sumValue([{key: 'a', value: 1}, {key: 'b', value: 2}, {key: 'c', value: 3}])
6
> sumValue([])
0`],filePath:`array/number/sumValue.ts`,lineNumber:17,name:`sumValue`,since:`0.3.0`}],id:`array/number`,inputType:`array`,label:`array → number`,outputType:`number`},{functions:[{description:`Return a function expecting a number and returning true if the number
is within the provided range (inclusive on both ends).`,examples:[`> isWithinRange = makeIsWithinRange([0, 5])
> isWithinRange(2)
true
> isWithinRange(5)
true
> isWithinRange(8)
false`],filePath:`array/number-boolean/makeIsWithinRange.ts`,lineNumber:20,name:`makeIsWithinRange`,since:`0.1.0`}],id:`array/number-boolean`,inputType:`array`,label:`array → number-boolean`,outputType:`number-boolean`},{functions:[{description:`Return a function that computes the polynomial of the input number using the provided coefficients.
The exponent corresponds to the coefficient's index.`,examples:[`> // x => 2 x + 4 x^3
> poly = makePolynomial([0, 2, 0, 4])
> poly(2)
36
> poly(5)
510`],filePath:`array/number-number/makePolynomial.ts`,lineNumber:17,name:`makePolynomial`,since:`0.1.0`}],id:`array/number-number`,inputType:`array`,label:`array → number-number`,outputType:`number-number`},{functions:[{description:`Return an object built using 'key's and 'value's from the objects in the provided array`,examples:[`> keyValueArrayToObject([
  {key: 'ITA', value: 0},
  {key: 'FRA', value: 0},
])
{ ITA: 0, FRA: 0 }`],filePath:`array/object/keyValueArrayToObject.ts`,lineNumber:17,name:`keyValueArrayToObject`,since:`0.1.0`},{description:`Return an object of occurrences of all the keys contained in the objects in the provided array`,examples:[`> makeAllOccurrences([{a: 1}, {a: 6, b: -1}, {a: 2, b: 0, c: 1}, {c: 4, e: 2}])
{a: 3, b: 2, c: 2, e: 1}`],filePath:`array/object/makeAllOccurrences.ts`,lineNumber:14,name:`makeAllOccurrences`,since:`0.1.0`},{description:`Return an object with the provided array elements as keys and all values
equal to their index in the array`,examples:[`> makeIndexByKey(['a', 'b'])
{a: 0, b: 1}
> makeIndexByKey([2, -4])
{'2': 0, '-4': 1}`],filePath:`array/object/makeIndexByKey.ts`,lineNumber:17,name:`makeIndexByKey`,since:`0.1.0`},{description:"Return an object with the provided array elements as keys and all values equal to `[]`",examples:[`> makeKeyedEmptyArray(['a', 'b'])
{a: [], b: []}`],filePath:`array/object/makeKeyedEmptyArray.ts`,lineNumber:14,name:`makeKeyedEmptyArray`,since:`0.3.0`},{description:"Return an object with the provided array elements as keys and all values equal to `false`",examples:[`> makeKeyedFalse(['a', 'b'])
{a: false, b: false}`],filePath:`array/object/makeKeyedFalse.ts`,lineNumber:14,name:`makeKeyedFalse`,since:`0.1.0`},{description:"Return an object with the provided array elements as keys and all values equal to `null`",examples:[`> makeKeyedNull(['a', 'b'])
{a: null, b: null}`],filePath:`array/object/makeKeyedNull.ts`,lineNumber:14,name:`makeKeyedNull`,since:`0.3.0`},{description:"Return an object with the provided array elements as keys and all values equal to `true`",examples:[`> makeKeyedTrue(['a', 'b'])
{a: true, b: true}`],filePath:`array/object/makeKeyedTrue.ts`,lineNumber:14,name:`makeKeyedTrue`,since:`0.1.0`},{description:`Return an object with the provided array elements as keys and all values equal to zero`,examples:[`> makeKeyedZeroes(['a', 'b'])
{a: 0, b: 0}
> makeKeyedZeroes([1, 2])
{1: 0, 2: 0}`],filePath:`array/object/makeKeyedZeroes.ts`,lineNumber:14,name:`makeKeyedZeroes`,since:`0.1.0`},{description:`Merge all the objects in the provided array.
The result depends on the order of the objects in the array.`,examples:[`> mergeObjects([{a: 1}, {a: 6, b: -1}, {b: 1}])
{a: 6, b: 1}`],filePath:`array/object/mergeObjects.ts`,lineNumber:15,name:`mergeObjects`,since:`0.1.0`},{description:`Return the {key, value} object from a pair`,examples:[`> pairToKeyValueObject(['a', 2])
{key: 'a', value: 2}
> pairToKeyValueObject([1, 2, 3])
{key: 1, value: 2}
> pairToKeyValueObject([])
{key: undefined, value: undefined}`],filePath:`array/object/pairToKeyValueObject.ts`,lineNumber:14,name:`pairToKeyValueObject`,since:`0.1.0`},{description:`Return the {key, values} object from a pair`,examples:[`> pairToKeyValuesObject(['a', [1, 2]])
{key: 'a', values: [1, 2]}
> pairToKeyValuesObject([1, [1, 2], 3])
{key: 1, values: [1, 2]}`],filePath:`array/object/pairToKeyValuesObject.ts`,lineNumber:12,name:`pairToKeyValuesObject`,since:`0.1.0`}],id:`array/object`,inputType:`array`,label:`array → object`,outputType:`object`},{functions:[{description:``,examples:[],filePath:`array/object-array/makeKeysGetter.ts`,lineNumber:21,name:`makeKeysGetter`},{description:`Return a function expecting an object and concatenating values in the provided list of keys.`,examples:[`> getProducts = pickAndConcatValues(['food', 'beverage'])
> getProducts({
    food: ['bread', 'cheese', 'ham'],
    beverage: ['wine', 'water'],
    id: 'area1',
    value: 32.1,
  })
['bread', 'cheese', 'ham', 'wine', 'water']`],filePath:`array/object-array/pickAndConcatValues.ts`,lineNumber:18,name:`pickAndConcatValues`,since:`0.1.0`}],id:`array/object-array`,inputType:`array`,label:`array → object-array`,outputType:`object-array`},{functions:[{description:"Return a predicate expecting an object and returning `true` if the value\nat the provided `key` is the same as the provided `value`.",examples:[`> isUSA = isKeyValue(['country_id', 'US'])
> isUSA({country_id: 'GB', id: 123})
false
> isUSA({country_id: 'US', id: 456})
true`],filePath:`array/object-boolean/isKeyValue.ts`,lineNumber:16,name:`isKeyValue`,since:`0.1.0`},{description:"Return a predicate expecting an object and returning `true` if the value\nat the provided `key` is not the same as the provided `value`.",examples:[`> isNotUSA = isNotKeyValue(['country_id', 'US'])
> isNotUSA({country_id: 'GB', id: 123})
true
> isNotUSA({country_id: 'US', id: 456})
false`],filePath:`array/object-boolean/isNotKeyValue.ts`,lineNumber:20,name:`isNotKeyValue`,since:`0.1.0`},{description:"Return a predicate expecting an object and returning `true` if the value\nat the provided `path` is not the same as the provided `value`.",examples:[`> isNotDefaultStatus = isNotPathValue(['item.status', 'default'])
> isNotDefaultStatus({item: {status: 'active'}, id: 123})
true
> isNotDefaultStatus({item: {status: 'default'}, id: 456})
false`],filePath:`array/object-boolean/isNotPathValue.ts`,lineNumber:20,name:`isNotPathValue`,since:`0.1.0`},{description:"Return a predicate expecting an object and returning `true` if the value\nat the provided `path` is the same as the provided `value`.",examples:[`> isDefaultStatus = isPathValue(['item.status', 'default'])
> isDefaultStatus({item: {status: 'active'}, id: 123})
false
> isDefaultStatus({item: {status: 'default'}, id: 456})
true`],filePath:`array/object-boolean/isPathValue.ts`,lineNumber:18,name:`isPathValue`,since:`0.1.0`}],id:`array/object-boolean`,inputType:`array`,label:`array → object-boolean`,outputType:`object-boolean`},{functions:[{description:`Return a function that expects an object and applies the provided sequence of
transforms to the values of the correspondent paths to the input object.
Note that transforms to the same path can be repeated.`,examples:[`> transform = applyTransformsSequence([
    ['a.a2.a22', _.pipe([Number, Math.sqrt])],
    ['a.a3', parseInt],
  ])
> transform({a: {a2: {a22: '9'}, a3: '3px'}})
{a: {a2: {a22: 3}, a3: 3}}`],filePath:`array/object-object/applyTransformsSequence.ts`,lineNumber:20,name:`applyTransformsSequence`,since:`0.1.0`},{description:`Return a function plucking the provided keys from the expected object values.`,examples:[`> let select = pluckValuesKeys(['a', 'k'])
> select({
    foo: {a: 1, b: 2, c: 3, k: 4},
    bar: {a: 5, b: 8}
  })
{foo: {a: 1, k: 4}, bar: {a: 5}}`],filePath:`array/object-object/pluckValuesKeys.ts`,lineNumber:16,name:`pluckValuesKeys`,since:`0.1.0`},{description:`Return a function expecting an object and returning an object having keys
and values defined by applying the provided array of two functions to the
input object keys and values.`,examples:["> remap = remapWith([key => `${key}${key}`, value => 3 * value])\n> remap({a: 1, b: 2})\n{aa: 3, bb: 6}"],filePath:`array/object-object/remapWith.ts`,lineNumber:17,name:`remapWith`,since:`0.1.0`}],id:`array/object-object`,inputType:`array`,label:`array → object-object`,outputType:`object-object`},{functions:[{description:`Return a string joining the provided array items with a blank`,examples:[`> joinWithBlank(['a', 'b', 'c'])
'a b c'`],filePath:`array/string/joinWithBlank.ts`,lineNumber:13,name:`joinWithBlank`,since:`0.1.0`},{description:`Return a string joining the provided array items with a colon`,examples:[`> joinWithColon(['a', 'b', 'c'])
'a:b:c'`],filePath:`array/string/joinWithColon.ts`,lineNumber:13,name:`joinWithColon`,since:`0.1.0`},{description:`Return a string joining the provided array items with a dash`,examples:[`> joinWithDash(['a', 'b', 'c'])
'a-b-c'`],filePath:`array/string/joinWithDash.ts`,lineNumber:13,name:`joinWithDash`,since:`0.1.0`},{description:`Return a string joining the provided array items with a return`,examples:[`> joinWithNewline([1, 2, 3])
'1\\n2\\n3'
> joinWithNewline(['a', 'b', 'c'])
'a\\nb\\nc'`],filePath:`array/string/joinWithNewline.ts`,lineNumber:15,name:`joinWithNewline`,since:`0.1.0`},{description:`Return a string joining the provided array items with a semicolon`,examples:[`> joinWithSemicolon(['a', 'b', 'c'])
'a;b;c'`],filePath:`array/string/joinWithSemicolon.ts`,lineNumber:13,name:`joinWithSemicolon`,since:`0.1.0`}],id:`array/string`,inputType:`array`,label:`array → string`,outputType:`string`},{functions:[{description:`Return a function that checks if a string contains one of the provided strings.`,examples:[`> isWeight = containsOneOf(['(g)', '(mg)', '(mcg)'])
> ['id', 'Energy (kcal)', 'Protein (g)', 'Cholesterol (mg)', 'Selenium (mcg)'].filter(isWeight)
['Protein (g)', 'Cholesterol (mg)', 'Selenium (mcg)']`],filePath:`array/string-boolean/containsOneOf.ts`,lineNumber:13,name:`containsOneOf`,since:`0.1.0`}],id:`array/string-boolean`,inputType:`array`,label:`array → string-boolean`,outputType:`string-boolean`},{functions:[{description:`Return a function extracting the portion of a string between the provided
indices (first included, second excluded). Note that indices can be negative.`,examples:[`> slicerPosPos = sliceStringAt([3, 5])
> slicerPosPos('0123456789')
'34'

> slicerPosImplicit = sliceStringAt([3])
> slicerPosImplicit('0123456789')
'3456789'

> slicerPosNeg = sliceStringAt([1, -3])
> slicerPosNeg('0123456789')
'123456'

> slicerNegPos = sliceStringAt([-6, 6])
> slicerNegPos('0123456789')
'45'`],filePath:`array/string-string/sliceStringAt.ts`,lineNumber:26,name:`sliceStringAt`,since:`0.1.0`}],id:`array/string-string`,inputType:`array`,label:`array → string-string`,outputType:`string-string`},{functions:[{description:`Return a function that returns true if the input value is equal to the provided value.
This can be used to compare objects and arrays.`,examples:[`> isEqualToObj = isEqualTo({a: 1, b: [1,2]})
> isEqualToObj({a: 1, b: [1, 2]})
true
> isEqualToObj({a: 1, b: [1, 2, 3]})
false`],filePath:`generic/any-boolean/isEqualTo.ts`,lineNumber:16,name:`isEqualTo`,since:`0.1.0`},{description:`Return a function that returns true if the input is different from the provided value.`,examples:[`> isNotTwo = isNot(2)
> isNotTwo(3)
true
> isNotTwo(2)
false`],filePath:`generic/any-boolean/isNot.ts`,lineNumber:17,name:`isNot`,since:`0.1.0`}],id:`generic/any-boolean`,inputType:`generic`,label:`generic → any-boolean`,outputType:`any-boolean`},{functions:[{description:`Return a function expecting an array of keys and returning an object with
the provided value as value of those keys.`,examples:[`> makeKeyedEmptyArray = makeKeyed([])
> makeKeyedEmptyArray([1, 2])
{1: [], 2: []}
> makeKeyedEmptyArray(['a', 'b'])
{a: [], b: []}`],filePath:`generic/array-object/makeKeyed.ts`,lineNumber:18,name:`makeKeyed`,since:`0.1.0`}],id:`generic/array-object`,inputType:`generic`,label:`generic → array-object`,outputType:`array-object`},{functions:[{description:`Return true if the input is an arguments list.`,examples:[],filePath:`generic/boolean/isArguments.ts`,lineNumber:10,name:`isArguments`,since:`0.1.0`},{description:`Return true if the input is an array.`,examples:[],filePath:`generic/boolean/isArray.ts`,lineNumber:10,name:`isArray`,since:`0.1.0`},{description:`Return true if the input is a function.`,examples:[],filePath:`generic/boolean/isFunction.ts`,lineNumber:10,name:`isFunction`,since:`0.1.0`},{description:`Return true if the input is not a NaN.`,examples:[],filePath:`generic/boolean/isNotNaN.ts`,lineNumber:8,name:`isNotNaN`,since:`0.1.0`},{description:`Return true if the input is not undefined or null.`,examples:[],filePath:`generic/boolean/isNotNil.ts`,lineNumber:10,name:`isNotNil`,since:`0.1.0`},{description:`Return true if the input is not null.`,examples:[],filePath:`generic/boolean/isNotNull.ts`,lineNumber:10,name:`isNotNull`,since:`0.1.0`},{description:`Return true if the input is a number (including NaN and Infinity).`,examples:[],filePath:`generic/boolean/isNumber.ts`,lineNumber:10,name:`isNumber`,since:`0.1.0`},{description:`Return true if the input is a plain object.`,examples:[],filePath:`generic/boolean/isObject.ts`,lineNumber:10,name:`isObject`,since:`0.1.0`},{description:`Return true if the input is a promise.`,examples:[],filePath:`generic/boolean/isPromise.ts`,lineNumber:13,name:`isPromise`,since:`0.1.0`},{description:`Return true if the input is a string.`,examples:[],filePath:`generic/boolean/isString.ts`,lineNumber:10,name:`isString`,since:`0.1.0`},{description:`Return true if the input is a valid number (including not being NaN).`,examples:[],filePath:`generic/boolean/isValidNumber.ts`,lineNumber:11,name:`isValidNumber`,since:`0.1.0`},{description:`Return the negated input.`,examples:[],filePath:`generic/boolean/negate.ts`,lineNumber:8,name:`negate`,since:`0.1.0`},{description:`Return true if the input, parsed to float, is a valid number.`,examples:[],filePath:`generic/boolean/toFloatIsValidNumber.ts`,lineNumber:10,name:`toFloatIsValidNumber`,since:`0.1.0`},{description:`Return true if the input, converted to Number, is indeed a number.`,examples:[],filePath:`generic/boolean/toNumberisValidNumber.ts`,lineNumber:10,name:`toNumberisValidNumber`,since:`0.1.0`}],id:`generic/boolean`,inputType:`generic`,label:`generic → boolean`,outputType:`boolean`},{functions:[{description:`Return an empty array if the input is undefined, identity otherwise.`,examples:[`> makeEmptyArrayIfUndefined(undefined)
[]
> makeEmptyArrayIfUndefined([1, 2, 3])
[1, 2, 3]`],filePath:`generic/generic/makeEmptyArrayIfUndefined.ts`,lineNumber:14,name:`makeEmptyArrayIfUndefined`,since:`0.1.0`},{description:"Return a copy of the input after stringifying and parsing it.\nUseful to strip `undefined` values for JSON comparison.",examples:[`> sanitize({a: 1, b: undefined})
{a: 1}
> sanitize([1, undefined])
[1, null]`],filePath:`generic/generic/sanitize.ts`,lineNumber:16,name:`sanitize`,since:`0.1.0`},{description:`Return a number if the input can be converted to float, identity otherwise.`,examples:[`> toFloatOrIdentity('2')
2
> toFloatOrIdentity('h2o')
'h2o'`],filePath:`generic/generic/toFloatOrIdentity.ts`,lineNumber:14,name:`toFloatOrIdentity`,since:`0.1.0`}],id:`generic/generic`,inputType:`generic`,label:`generic → generic`,outputType:`generic`},{functions:[{description:`Return a function that returns true if at least one of the input object
properties has the provided value.`,examples:[`> hasTwo = hasValue(2)
> hasTwo({a: 1, b: 2})
true
> hasTwo({a: 1, b: 3})
false`],filePath:`generic/object-boolean/hasValue.ts`,lineNumber:21,name:`hasValue`,since:`0.1.0`}],id:`generic/object-boolean`,inputType:`generic`,label:`generic → object-boolean`,outputType:`object-boolean`},{functions:[{description:`Return a string representation of the input with indentation = 2.`,examples:[`> stringify([{a: 1}, {a: 2}])
'[\\n  {\\n    "a": 1\\n  },\\n  {\\n    "a": 2\\n  }\\n]'`],filePath:`generic/string/stringify.ts`,lineNumber:12,name:`stringify`,since:`0.1.0`}],id:`generic/string`,inputType:`generic`,label:`generic → string`,outputType:`string`},{functions:[{description:`A function that does nothing.`,examples:[`> noop()
undefined`],filePath:`generic/undefined/noop.ts`,lineNumber:10,name:`noop`,since:`0.1.0`}],id:`generic/undefined`,inputType:`generic`,label:`generic → undefined`,outputType:`undefined`},{functions:[{description:`Return true if the iterable has exactly one element`,examples:[`> hasIterableLength1('a')
true
> hasIterableLength1([1])
true
> hasIterableLength1([1, 2])
false`],filePath:`iterable/boolean/hasIterableLength1.ts`,lineNumber:21,name:`hasIterableLength1`,since:`0.1.0`},{description:`Return true if the iterable is empty`,examples:[`> isIterableEmpty('')
true
> isIterableEmpty([])
true
> isIterableEmpty([1, 2])
false`],filePath:`iterable/boolean/isIterableEmpty.ts`,lineNumber:21,name:`isIterableEmpty`,since:`0.1.0`},{description:`Return true if the iterable has more than one element`,examples:[`> isIterableLongerThan1('ab')
true
> isIterableLongerThan1([1, 2])
true
> isIterableLongerThan1([1])
false`],filePath:`iterable/boolean/isIterableLongerThan1.ts`,lineNumber:21,name:`isIterableLongerThan1`,since:`0.1.0`},{description:`Return true if the iterable is not empty`,examples:[`> isIterableNotEmpty('a')
true
> isIterableNotEmpty([1, 2])
true
> isIterableNotEmpty([])
false`],filePath:`iterable/boolean/isIterableNotEmpty.ts`,lineNumber:21,name:`isIterableNotEmpty`,since:`0.1.0`}],id:`iterable/boolean`,inputType:`iterable`,label:`iterable → boolean`,outputType:`boolean`},{functions:[{description:`Get the length of the iterable`,examples:[`> getLength('a')
1
> getLength('two')
3
> getLength([10])
1
> getLength([3, 7])
2`],filePath:`iterable/number/getLength.ts`,lineNumber:20,name:`getLength`,since:`0.1.0`}],id:`iterable/number`,inputType:`iterable`,label:`iterable → number`,outputType:`number`},{functions:[{description:"Return `true` if the input number is 0.",examples:[`> is0(0)
true
> is0(2)
false`],filePath:`number/boolean/is0.ts`,lineNumber:16,name:`is0`,since:`0.1.0`},{description:"Return `true` if the input number is 1.",examples:[`> is1(1)
true
> is1(2)
false`],filePath:`number/boolean/is1.ts`,lineNumber:16,name:`is1`,since:`0.1.0`},{description:"Return `true` if the input number is greater than 0.",examples:[`> isGT0(-1)
false
> isGT0(2)
true`],filePath:`number/boolean/isGT0.ts`,lineNumber:16,name:`isGT0`,since:`0.1.0`},{description:"Return `true` if the input number is greater than 1.",examples:[`> isGT1(0)
false
> isGT1(2)
true`],filePath:`number/boolean/isGT1.ts`,lineNumber:16,name:`isGT1`,since:`0.1.0`}],id:`number/boolean`,inputType:`number`,label:`number → boolean`,outputType:`boolean`},{functions:[{description:`Return the factorial of a number.`,examples:[`> factorial(0)
1
> factorial(5)
120`],filePath:`number/number/factorial.ts`,lineNumber:14,name:`factorial`,since:`0.3.0`}],id:`number/number`,inputType:`number`,label:`number → number`,outputType:`number`},{functions:[{description:`Return a function that rounds the input number to the provided number of digits.`,examples:[`> roundTo2 = roundTo(2)
> roundTo2(2.41285)
2.41
> roundTo2(2.41785)
2.42`],filePath:`number/number-number/roundTo.ts`,lineNumber:16,name:`roundTo`,since:`0.1.0`}],id:`number/number-number`,inputType:`number`,label:`number → number-number`,outputType:`number-number`},{functions:[{description:`Return an empty string if the provided number is 1, otherwise return 's'.
Useful for building pluralized labels.`,examples:[`> plural(1)
''
> plural(2)
's'
> plural(0)
's'
> plural(-1)
's'`],filePath:`number/string/plural.ts`,lineNumber:19,name:`plural`,since:`0.3.0`}],id:`number/string`,inputType:`number`,label:`number → string`,outputType:`string`},{functions:[{description:`Concatenate the values of the provided object.`,examples:[`> concatValues({a: [1, 2, 3], b: [4, 5, 6]})
[1, 2, 3, 4, 5, 6]`],filePath:`object/array/concatValues.ts`,lineNumber:16,name:`concatValues`,since:`0.1.0`},{description:`Return the keys of the provided object with a truthy value.`,examples:[`> getTruthyValuesKeys({a: true, b: true, c: false})
['a', 'b']
> getTruthyValuesKeys({a: 1, b: 0, c: false})
['a']
> getTruthyValuesKeys({a: [1, 2], b: {a: 1}, c: false})
['a', 'b']`],filePath:`object/array/getTruthyValuesKeys.ts`,lineNumber:20,name:`getTruthyValuesKeys`,since:`0.1.0`},{description:`Return an array of the permutations of the provided object values items, by key.
Note that this function assumes the provided object values are arrays.`,examples:[`> makeKeyedValuesPermutations({a: [0, 1], b: [2, 3], c: [4, 5]})
[
  {a: 0, b: 2, c: 4}, {a: 1, b: 2, c: 4},
  {a: 0, b: 3, c: 4}, {a: 1, b: 3, c: 4},
  {a: 0, b: 2, c: 5}, {a: 1, b: 2, c: 5},
  {a: 0, b: 3, c: 5}, {a: 1, b: 3, c: 5}
]`],filePath:`object/array/makeKeyedValuesPermutations.ts`,lineNumber:24,name:`makeKeyedValuesPermutations`,since:`0.1.0`},{description:`Return an array of {key, value} objects from an object.`,examples:[`> objectToKeyValueArray({k1: 'v1', k2: 'v2'})
[{key: 'k1', value: 'v1'}, {key: 'k2', value: 'v2'}]`],filePath:`object/array/objectToKeyValueArray.ts`,lineNumber:16,name:`objectToKeyValueArray`,since:`0.1.0`},{description:`Return an array of {key, values} objects from an object.`,examples:[`> objectToKeyValuesArray({k1: ['a', 'b'], k2: ['c', 'd']})
[{key: 'k1', values: ['a', 'b']}, {key: 'k2', values: ['c', 'd']}]`],filePath:`object/array/objectToKeyValuesArray.ts`,lineNumber:16,name:`objectToKeyValuesArray`,since:`0.1.0`},{description:"Convert an object to a key-value array sorted by `value` (descending) then `key` (ascending).",examples:[`> objectToValueDescKeyAsc({b: 1, a: 3, c: 1})
[{key: 'a', value: 3}, {key: 'b', value: 1}, {key: 'c', value: 1}]`],filePath:`object/array/objectToValueDescKeyAsc.ts`,lineNumber:17,name:`objectToValueDescKeyAsc`,since:`0.3.0`}],id:`object/array`,inputType:`object`,label:`object → array`,outputType:`array`},{functions:[{description:"Return `true` if all values of the provided object are truthy.",examples:[`> areAllValuesTruthy({a: 1, b: 'hello', c: true})
true
> areAllValuesTruthy({a: 1, b: 0, c: true})
false`],filePath:`object/boolean/areAllValuesTruthy.ts`,lineNumber:18,name:`areAllValuesTruthy`,since:`0.3.0`},{description:"Return `true` if at least one value of the provided object is truthy.",examples:[`> areSomeValuesTruthy({a: 0, b: 1, c: false})
true
> areSomeValuesTruthy({a: 0, b: false, c: null})
false`],filePath:`object/boolean/areSomeValuesTruthy.ts`,lineNumber:18,name:`areSomeValuesTruthy`,since:`0.3.0`},{description:"Return `true` if all values of the provided object are equal.",examples:[`> areValuesEqual({a: 1, b: 1, c: 1})
true
> areValuesEqual({a: [1, 2], b: [1, 2], c: [1, 2]})
true
> areValuesEqual({a: 1, b: 2, c: 3})
false
> areValuesEqual({})
false`],filePath:`object/boolean/areValuesEqual.ts`,lineNumber:22,name:`areValuesEqual`,since:`0.1.0`},{description:"Return `true` if the provided object has exactly one key.",examples:[`> hasObjSize1({})
false
> hasObjSize1({a: 1})
true
> hasObjSize1({a: 1, b: 2})
false`],filePath:`object/boolean/hasObjSize1.ts`,lineNumber:21,name:`hasObjSize1`,since:`0.1.0`},{description:"Return true if some of the provided object properties are `null`.",examples:[`> hasSomeNullValues({a: 1})
false
> hasSomeNullValues({a: 1, b: undefined})
false
> hasSomeNullValues({a: 1, b: undefined, c: null})
true`],filePath:`object/boolean/hasSomeNullValues.ts`,lineNumber:18,name:`hasSomeNullValues`,since:`0.1.0`},{description:"Return `true` if the object is empty.",examples:[`> isObjEmpty({})
true
> isObjEmpty({a: 1})
false`],filePath:`object/boolean/isObjEmpty.ts`,lineNumber:19,name:`isObjEmpty`,since:`0.1.0`},{description:"Return `true` if the object is not empty.",examples:[`> isObjNotEmpty({a: 1})
true
> isObjNotEmpty({})
false`],filePath:`object/boolean/isObjNotEmpty.ts`,lineNumber:19,name:`isObjNotEmpty`,since:`0.1.0`}],id:`object/boolean`,inputType:`object`,label:`object → boolean`,outputType:`boolean`},{functions:[{description:`Retrieve the 'id' property of the provided object.`,examples:[`> getId({id: 'foo', name: 'bar'})
'foo'`],filePath:`object/generic/getId.ts`,lineNumber:12,name:`getId`,since:`0.1.0`},{description:`Retrieve the 'key' property of the provided object.`,examples:[`> getKey({key: 'foo', value: 'bar'})
'foo'`],filePath:`object/generic/getKey.ts`,lineNumber:12,name:`getKey`,since:`0.1.0`},{description:`Retrieve the 'value' property of the provided object.`,examples:[`> getValue({key: 'foo', value: 'bar'})
'bar'`],filePath:`object/generic/getValue.ts`,lineNumber:12,name:`getValue`,since:`0.1.0`},{description:`Retrieve the 'values' property of the provided object.`,examples:[`> getValues({key: 'foo', values: [0, 1, 2, 3]})
[0, 1, 2, 3]`],filePath:`object/generic/getValues.ts`,lineNumber:12,name:`getValues`,since:`0.1.0`}],id:`object/generic`,inputType:`object`,label:`object → generic`,outputType:`generic`},{functions:[{description:`Return a function expecting any kind of input to be used as the argument
of the provided functions`,examples:[`> array = [
    {fname: 'John', lname: 'Woo', lng: 1, lat: 2},
    {fname: 'John', lname: 'Foo', lng: 7, lat: 8}
];
> format = applyFnMap({
    coords: _.collect([_.getKey('lng'), _.getKey('lat')]),
    fullname: _.pipe([
        _.collect([_.getKey('fname'), _.getKey('lname')]),
        _.joinWith(' ')
    ]),
});
> formatted = _.map(raw, format)
[
    {coords: [1, 2], fullname: 'John Woo'},
    {coords: [7, 8], fullname: 'John Foo'}
]`],filePath:`object/generic-object/applyFnMap.ts`,lineNumber:29,name:`applyFnMap`,since:`0.1.0`}],id:`object/generic-object`,inputType:`object`,label:`object → generic-object`,outputType:`generic-object`},{functions:[{description:`Return the size of the provided object.`,examples:[`> getObjSize({a: 1, b: 2})
2`],filePath:`object/number/getObjSize.ts`,lineNumber:16,name:`getObjSize`,since:`0.1.0`},{description:`Return the max of the provided object values.`,examples:[`> valuesMax({a: -3, b: 2, c: 1})
2`],filePath:`object/number/valuesMax.ts`,lineNumber:16,name:`valuesMax`,since:`0.1.0`},{description:`Return the min of the provided object values.`,examples:[`> valuesMin({a: -3, b: 2, c: 1})
-3`],filePath:`object/number/valuesMin.ts`,lineNumber:16,name:`valuesMin`,since:`0.1.0`}],id:`object/number`,inputType:`object`,label:`object → number`,outputType:`number`},{functions:[{description:`Return an object counting the occurrences of each unique value in the provided object.`,examples:[`> countValues({a: 'x', b: 'y', c: 'x', d: 'z', e: 'y'})
{x: 2, y: 2, z: 1}`],filePath:`object/object/countValues.ts`,lineNumber:14,name:`countValues`,since:`0.3.0`},{description:`Return a copy of the object with values converted to float.`,examples:[`> mapValuesToFloat({a: '1.2px', b: '20px'})
{a: 1.2, b: 20}
> mapValuesToFloat({a: '1.2', b: 'h2o'})
{a: 1.2, b: NaN}`],filePath:`object/object/mapValuesToFloat.ts`,lineNumber:16,name:`mapValuesToFloat`,since:`0.1.0`},{description:`Return the object with values converted to numbers where possible.`,examples:[`> mapValuesToFloatPossibly({a: '1.2', b: '2px', c: 'h2o'})
{a: 1.2, b: 2, c: 'h2o'}`],filePath:`object/object/mapValuesToFloatPossibly.ts`,lineNumber:16,name:`mapValuesToFloatPossibly`,since:`0.1.0`},{description:`Return a copy of the object with values converted to numbers.`,examples:[`> mapValuesToNumber({a: '1.2', b: '2'})
{a: 1.2, b: 2}
> mapValuesToNumber({a: '1.2', b: '2s'})
{a: 1.2, b: NaN}`],filePath:`object/object/mapValuesToNumber.ts`,lineNumber:16,name:`mapValuesToNumber`,since:`0.1.0`},{description:`Return a copy of the object without falsy values.`,examples:[`> pickIfTruthy({a: true, b: true, c: false})
{a: true, b: true}
> pickIfTruthy({a: 1, b: 0, c: false})
{a: 1}
> pickIfTruthy({a: [1, 2], b: {a: 1}, c: false})
{a: [1, 2], b: {a: 1}}`],filePath:`object/object/pickIfTruthy.ts`,lineNumber:18,name:`pickIfTruthy`,since:`0.1.0`},{description:`Return a copy of the input object with enumerable properties sorted in ascending order.`,examples:[`> sortObjectKeysAsc({c: 1, a: 2, b: 15})
{a: 2, b: 15, c: 1}`],filePath:`object/object/sortObjectKeysAsc.ts`,lineNumber:14,name:`sortObjectKeysAsc`,since:`0.1.0`},{description:`Return a copy of the input object with enumerable properties sorted in descending order.`,examples:[`> sortObjectKeysDesc({c: 1, a: 2, b: 15})
{c: 1, b: 15, a: 2}`],filePath:`object/object/sortObjectKeysDesc.ts`,lineNumber:14,name:`sortObjectKeysDesc`,since:`0.1.0`},{description:`Return an object with swapped keys and values.
If there are duplicate values, the last occurrence wins.`,examples:[`> swapKeyValue({a: 1, b: 2, c: 'd'})
{1: 'a', 2: 'b', d: 'c'}
> swapKeyValue({a: 1, b: 2, c: 'd', e: 1})
{2: 'b', d: 'c', 1: 'e'}`],filePath:`object/object/swapKeyValue.ts`,lineNumber:17,name:`swapKeyValue`,since:`0.1.0`}],id:`object/object`,inputType:`object`,label:`object → object`,outputType:`object`},{functions:[{description:`Return a function that applies the provided map to the expected object and
merges the result to the object.
This is useful to add new properties to an object, eventually modifying
existing ones by using keys expected to be in the input objects.`,examples:[`> enhancer = makeMergeAppliedFnMap({
    coords: _.collect([_.getKey('lng'), _.getKey('lat')]),
    fullname: _.pipe([
        _.collect([_.getKey('fname'), _.getKey('lname')]),
        _.joinWith(' ')
    ]),
    lat: obj => roundTo2(obj.lat),
    lng: obj => roundTo2(obj.lng),
})
> enhancer({fname: 'John', lat: 2.345434, lname: 'Woo', lng: 10.3425})
{coords: [10.3425, 2.345434], fname: 'John', fullname: 'John Woo', lat: 2.35, lname: 'Woo', lng: 10.34}`],filePath:`object/object-object/makeMergeAppliedFnMap.ts`,lineNumber:28,name:`makeMergeAppliedFnMap`,since:`0.1.0`},{description:`Return a function expecting an object to merge with the input object.`,examples:[`> mergeB = mergeObj({b: 2})
> mergeB({a: 1})
{a: 1, b: 2}
> mergeB({a: 1, b: 1})
{a: 1, b: 2}`],filePath:`object/object-object/mergeObj.ts`,lineNumber:17,name:`mergeObj`,since:`0.1.0`},{description:`Return a function that expects an object and applies the functions in the
values of the input object to the values of the provided object found in
the paths in the correspondent keys.`,examples:[`> transform = transformPaths({
    'a.a2.a22': _.pipe([Number, Math.sqrt]),
    'a.a3': parseInt,
    'b.b2': parseInt,
})
> transform({a: {a1: 'a1', a2: {a21: 'a21', a22: '9'}, a3: '3px', a4: '2'}, b: {b1: 'b1', b2: '4px'}})
{a: {a1: 'a1', a2: {a21: 'a21', a22: 3}, a3: 3, a4: '2'}, b: {b1: 'b1', b2: 4}}`],filePath:`object/object-object/transformPaths.ts`,lineNumber:21,name:`transformPaths`,since:`0.1.0`},{description:`Return a function that expects an object and applies the functions in the
values of the input object to the correspondent values of the provided object.
Since 0.6.0 it assumes identity for missing keys.`,examples:[`> conversionFn = transformValues({
    name: _.identity,
    a: _.pipe([Number, Math.sqrt]),
    b: Number,
    width: parseFloat
})
> conversionFn({name: 'foo', a: '9', b: '2', width: '10px'})
{name: 'foo', a: 3, b: 2, width: 10}`],filePath:`object/object-object/transformValues.ts`,lineNumber:22,name:`transformValues`,since:`0.1.0`},{description:`Return a function that expects an object and applies the provided updater
function to the values correspondent to the provided keys, leaving the other
properties unchanged.`,examples:[`> update = updateKeys({keys: ['a', 'k', 'm'], updater: x => x * 2})
> update({a: 1, b: 2, d: 4, k: 7, m: 2})
{a: 2, b: 2, d: 4, k: 14, m: 4}
> update({a: 1, b: 2, d: 4})
{a: 2, b: 2, d: 4}
> update({b: 2, d: 4})
{b: 2, d: 4}`],filePath:`object/object-object/updateKeys.ts`,lineNumber:19,name:`updateKeys`,since:`0.1.0`}],id:`object/object-object`,inputType:`object`,label:`object → object-object`,outputType:`object-object`},{functions:[{description:`Retrieve the 'label' property of the provided object.`,examples:[`> getLabel({label: 'foo', value: 42})
'foo'`],filePath:`object/string/getLabel.ts`,lineNumber:12,name:`getLabel`,since:`0.3.0`},{description:`Retrieve the 'label' property of the provided object, lowercased.
Returns an empty string if label is undefined.`,examples:[`> getLabelLowercase({label: 'Foo', value: 42})
'foo'
> getLabelLowercase({value: 42})
''`],filePath:`object/string/getLabelLowercase.ts`,lineNumber:19,name:`getLabelLowercase`,since:`0.3.0`}],id:`object/string`,inputType:`object`,label:`object → string`,outputType:`string`},{functions:[{description:`Return a function that checks if the expected string is a key of the
provided object.`,examples:[`> isKeyOfObj = isKeyOf({a: 1, b: 2})
> isKeyOfObj('a')
true
> isKeyOfObj('c')
false`],filePath:`object/string-boolean/isKeyOf.ts`,lineNumber:18,name:`isKeyOf`,since:`0.1.0`}],id:`object/string-boolean`,inputType:`object`,label:`object → string-boolean`,outputType:`string-boolean`},{functions:[{description:`Returns true if the provided RegExp is empty`,examples:[`> isRegexpEmpty(/(?:)/u)
true
> isRegexpEmpty(/^a/u)
false`],filePath:`regexp/boolean/isRegexpEmpty.ts`,lineNumber:14,name:`isRegexpEmpty`,since:`0.1.0`},{description:`Returns true if the provided RegExp is not empty`,examples:[`> isRegexpNotEmpty(/^a/u)
true
> isRegexpNotEmpty(/(?:)/u)
false`],filePath:`regexp/boolean/isRegexpNotEmpty.ts`,lineNumber:14,name:`isRegexpNotEmpty`,since:`0.1.0`}],id:`regexp/boolean`,inputType:`regexp`,label:`regexp → boolean`,outputType:`boolean`},{functions:[{description:"A descending sorter for arrays of objects with a `key` property.\nUse with `_.sortWith` to sort by `key` descending.",examples:[`> _.sortWith([sorterKeyDesc])([{key: 'b', value: 1}, {key: 'c', value: 2}])
[{key: 'c', value: 2}, {key: 'b', value: 1}]`],filePath:`_sorters/sorterKeyDesc.ts`,lineNumber:17,name:`sorterKeyDesc`,since:`0.3.0`},{description:"A descending sorter for arrays of objects with a `label` property.\nUse with `_.sortWith` to sort by `label` descending.",examples:[`> _.sortWith([sorterLabelDesc])([{label: 'a'}, {label: 'c'}, {label: 'b'}])
[{label: 'c'}, {label: 'b'}, {label: 'a'}]`],filePath:`_sorters/sorterLabelDesc.ts`,lineNumber:17,name:`sorterLabelDesc`,since:`0.3.0`},{description:"A descending sorter for arrays of objects with a `value` property.\nUse with `_.sortWith` to sort by `value` descending.",examples:[`> _.sortWith([sorterValueDesc])([{key: 'a', value: 1}, {key: 'b', value: 3}])
[{key: 'b', value: 3}, {key: 'a', value: 1}]`],filePath:`_sorters/sorterValueDesc.ts`,lineNumber:17,name:`sorterValueDesc`,since:`0.3.0`}],id:`sorters`,inputType:`sorters`,label:`sorters`,outputType:`sorters`},{functions:[{description:"Return a function expecting an object and returning `true` if the input\nobject has a key satisfying the provided predicate",examples:[`> const hasA = hasKeyWith(x => x === 'a')
> hasA({a: 2, b: 4, c: 3})
true
> hasA({b: 4, c: 3})
false`],filePath:`string-boolean/object-boolean/hasKeyWith.ts`,lineNumber:18,name:`hasKeyWith`,since:`0.1.0`}],id:`string-boolean/object-boolean`,inputType:`string-boolean`,label:`string-boolean → object-boolean`,outputType:`object-boolean`},{functions:[{description:`Return a function expecting an object and returning a new object with only
the keys satisfying the provided predicate`,examples:[`> const keysStartWithA = pickIfKeyWith(key => key.startsWith('a'))
> keysStartWithA({a: 1, aa: 2, b: 0, c: 0})
{a: 1, aa: 2}
> keysStartWithA({b: 0, c: 0})
{}`],filePath:`string-boolean/object-object/pickIfKeyWith.ts`,lineNumber:18,name:`pickIfKeyWith`,since:`0.3.0`},{description:`Return a function expecting an object and returning a new object without
the keys satisfying the provided predicate`,examples:[`> const keysDontStartWithA = skipIfKeyWith(key => key.startsWith('a'))
> keysDontStartWithA({a: 1, aa: 2, b: 0, c: 0})
{b: 0, c: 0}
> keysDontStartWithA({b: 0, c: 0})
{b: 0, c: 0}`],filePath:`string-boolean/object-object/skipIfKeyWith.ts`,lineNumber:18,name:`skipIfKeyWith`,since:`0.3.0`}],id:`string-boolean/object-object`,inputType:`string-boolean`,label:`string-boolean → object-object`,outputType:`object-object`},{functions:[{description:`Return a function expecting an object and returning a new object with keys
renamed with the provided function.`,examples:["> const rename = renameKeysWith(key => `--${key}`)\n> rename({foo: 1, bar: 2})\n{'--foo': 1, '--bar': 2}"],filePath:`string-string/object-object/renameKeysWith.ts`,lineNumber:17,name:`renameKeysWith`,since:`0.1.0`}],id:`string-string/object-object`,inputType:`string-string`,label:`string-string → object-object`,outputType:`object-object`},{functions:[{description:`Return lines in a string (trimmed, split by newline)`,examples:[`> makeLines('A,B\\n1,2\\n3,4\\n')
['A,B', '1,2', '3,4']`],filePath:`string/array/makeLines.ts`,lineNumber:15,name:`makeLines`,since:`0.1.0`},{description:`Return rows in a string excluding the first line (the header).
Useful for CSVs.`,examples:[`> makeRows('A,B\\n1,2\\n3,4\\n')
['1,2', '3,4']`],filePath:`string/array/makeRows.ts`,lineNumber:16,name:`makeRows`,since:`0.1.0`},{description:`Return an array from a ndjson string`,examples:[`> ndjsonToArray('{"a":1}\\n{"b":2}\\n\\n')
[{a: 1}, {b: 2}]`],filePath:`string/array/ndjsonToArray.ts`,lineNumber:13,name:`ndjsonToArray`,since:`0.1.0`},{description:`Return an array by splitting by '.'`,examples:[`> splitByDot('a.b.c')
['a', 'b', 'c']`],filePath:`string/array/splitByDot.ts`,lineNumber:14,name:`splitByDot`,since:`0.1.0`},{description:`Return an array by splitting by '\\n'`,examples:[`> splitByEOL('a\\nb\\nc')
['a', 'b', 'c']`],filePath:`string/array/splitByEOL.ts`,lineNumber:14,name:`splitByEOL`,since:`0.1.0`},{description:`Return an array by splitting by ';'`,examples:[`> splitBySemiColon('A;B;C')
['A', 'B', 'C']`],filePath:`string/array/splitBySemiColon.ts`,lineNumber:14,name:`splitBySemiColon`,since:`0.1.0`}],id:`string/array`,inputType:`string`,label:`string → array`,outputType:`array`},{functions:[{description:`Return a function expecting an array of objects and plucking the provided array
with the input path`,examples:[`> getABs = pluckPath('a.b')
> getABs([{a: {b: -1, label: 'foo'}}, {a: {b: 4, label: 'bar'}}])
[-1, 4]
> getABs([{a: {label: 'foo'}}, {a: {b: 2}}])
[undefined, 2]`],filePath:`string/array-array/pluckPath.ts`,lineNumber:19,name:`pluckPath`,since:`0.1.0`},{description:`Return a function expecting an array of objects and returning an array of
unique values for the provided key.`,examples:[`> pluckUniquesByA = pluckUniques('a')
> pluckUniquesByA([{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 2}])
[1, 2]`],filePath:`string/array-array/pluckUniques.ts`,lineNumber:16,name:`pluckUniques`,since:`0.3.0`},{description:"Return a copy of the provided array of objects assigning each object index\nto a property with the provided key (defaulting to `index`)",examples:[`> setIndexAsKey()([{a: 2}, {c: 5}])
[{a: 2, index: 0}, {c: 5, index: 1}]
> setIndexAsKey('idx')([{a: 2}, {c: 5}])
[{a: 2, idx: 0}, {c: 5, idx: 1}]`],filePath:`string/array-array/setIndexAsKey.ts`,lineNumber:17,name:`setIndexAsKey`,since:`0.1.0`}],id:`string/array-array`,inputType:`string`,label:`string → array-array`,outputType:`array-array`},{functions:[{description:"Return a function expecting an array of objects and returning the max of values by the provided key.\nThe same can be done by `arrayMaxWith(_.getKey(key))` but here we avoid invoking a function for all the items.",examples:[`> maxByA = arrayMaxBy('a')
> maxByA([{a: -1, b: -1}, {a: 0, b: 0}])
0
> maxByA([{a: 1, b: 1}, {a: 2, b: -2}])
2`],filePath:`string/array-number/arrayMaxBy.ts`,lineNumber:16,name:`arrayMaxBy`,since:`0.1.0`},{description:"Return a function expecting an array of objects and returning the min of values by the provided key.\nThe same can be done by `arrayMinWith(_.getKey(key))` but here we avoid invoking a function for all the items.",examples:[`> minByA = arrayMinBy('a')
> minByA([{a: -1, b: -1}, {a: 0, b: 0}])
-1
> minByA([{a: 1, b: 1}, {a: 2, b: -2}])
1`],filePath:`string/array-number/arrayMinBy.ts`,lineNumber:16,name:`arrayMinBy`,since:`0.1.0`}],id:`string/array-number`,inputType:`string`,label:`string → array-number`,outputType:`array-number`},{functions:[{description:`Return a function expecting an array of objects and counting their values
for the provided key.`,examples:[`> countA = countByKey('a')
> countA([{a: 1, b: 2}, {a: 1, b: 4}, {a: 'foo', b: 6}, {a: 'bar', b: 7}])
{'1': 2, 'foo': 1, 'bar': 1}`],filePath:`string/array-object/countByKey.ts`,lineNumber:16,name:`countByKey`,since:`0.3.0`}],id:`string/array-object`,inputType:`string`,label:`string → array-object`,outputType:`array-object`},{functions:[{description:`Return true if the string ends with a newline`,examples:[`> endsWithNewLine('abc')
false
> endsWithNewLine('abc\\n')
true
> endsWithNewLine('abc\\r\\n')
true`],filePath:`string/boolean/endsWithNewLine.ts`,lineNumber:18,name:`endsWithNewLine`,since:`0.1.0`},{description:`Return true if the trimmed string is not empty`,examples:[`> isTrimmedNotEmpty('  foo  ')
true
> isTrimmedNotEmpty('  ')
false`],filePath:`string/boolean/isTrimmedNotEmpty.ts`,lineNumber:17,name:`isTrimmedNotEmpty`,since:`0.1.0`}],id:`string/boolean`,inputType:`string`,label:`string → boolean`,outputType:`boolean`},{functions:[{description:"Parse a JS module string (possibly prefixed with `export default `) and\nreturn the resulting value.",examples:[`> exportedJsObjToAny('export default {"a":1}')
{a: 1}
> exportedJsObjToAny('{"a":1}')
{a: 1}`],filePath:`string/generic/exportedJsObjToAny.ts`,lineNumber:14,name:`exportedJsObjToAny`,since:`0.1.0`}],id:`string/generic`,inputType:`string`,label:`string → generic`,outputType:`generic`},{functions:[{description:`Return the length of the end of line, if any.`,examples:[`> getEndOfLineLength('hello')
0
> getEndOfLineLength('hello\\n')
1
> getEndOfLineLength('hello\\r\\n')
2`],filePath:`string/number/getEndOfLineLength.ts`,lineNumber:16,name:`getEndOfLineLength`,since:`0.1.0`}],id:`string/number`,inputType:`string`,label:`string → number`,outputType:`number`},{functions:[{description:"Return a function expecting an object of objects and returning the max of values by the provided key.\nThe same can be done by `valuesMaxWith(_.getKey(key))` but here we avoid invoking a function for all the items.",examples:[`> maxByK1 = valuesMaxBy('k1')
> maxByK1({a: {k1: 1, k2: 20}, b: {k1: 3, k2: 2}})
3
> maxByK1({a: {k1: 9, k2: 12}, b: {k1: 7, k2: 2}})
9`],filePath:`string/object-number/valuesMaxBy.ts`,lineNumber:21,name:`valuesMaxBy`,since:`0.1.0`},{description:"Return a function expecting an object of objects and returning the min of values by the provided key.\nThe same can be done by `valuesMinWith(_.getKey(key))` but here we avoid invoking a function for all the items.",examples:[`> minByK1 = valuesMinBy('k1')
> minByK1({a: {k1: 1, k2: 20}, b: {k1: 3, k2: 2}})
1
> minByK1({a: {k1: 9, k2: 12}, b: {k1: 7, k2: 2}})
7`],filePath:`string/object-number/valuesMinBy.ts`,lineNumber:20,name:`valuesMinBy`,since:`0.1.0`}],id:`string/object-number`,inputType:`string`,label:`string → object-number`,outputType:`object-number`},{functions:[{description:`Return a regular expression based on the given string`,examples:[`> regexOf('foo')
/foo/giu`],filePath:`string/regexp/regexOf.ts`,lineNumber:12,name:`regexOf`,since:`0.1.0`},{description:`Return a safe regular expression based on the given string,
with any special characters escaped`,examples:[`> safeRegexOf('foo+bar')
/foo\\+bar/giu`],filePath:`string/regexp/safeRegexOf.ts`,lineNumber:15,name:`safeRegexOf`,since:`0.1.0`}],id:`string/regexp`,inputType:`string`,label:`string → regexp`,outputType:`regexp`},{functions:[{description:`Capitalise the input string`,examples:[`> capitalize('hello')
'Hello'`],filePath:`string/string/capitalize.ts`,lineNumber:12,name:`capitalize`,since:`0.1.0`},{description:`Decapitalise the input string (makes the first letter lowercase)`,examples:[`> decapitalize('Hello')
'hello'
> decapitalize('HELLO')
'hELLO'`],filePath:`string/string/decapitalize.ts`,lineNumber:14,name:`decapitalize`,since:`0.1.0`},{description:`Return a copy of the provided string with whitespace trimmed from both ends.`,examples:[`> trim(' abc \\n ')
'abc'`],filePath:`string/string/trim.ts`,lineNumber:10,name:`trim`,since:`0.1.0`},{description:`Trim the last char of the provided string if it's a newline`,examples:[`> trimLastNewline('a\\nb\\nc')
'a\\nb\\nc'
> trimLastNewline('a\\nb\\nc\\n')
'a\\nb\\nc'
> trimLastNewline('a\\nb\\nc\\n\\n')
'a\\nb\\nc\\n'
> trimLastNewline('a\\nb\\nc\\r\\n')
'a\\nb\\nc'
> trimLastNewline('a\\nb\\nc\\n\\r\\n')
'a\\nb\\nc\\n'`],filePath:`string/string/trimLastNewline.ts`,lineNumber:20,name:`trimLastNewline`,since:`0.1.0`}],id:`string/string`,inputType:`string`,label:`string → string`,outputType:`string`},{functions:[{description:`Return a function expecting a string to be split using the provided separator or regex`,examples:[`> splitByDoubleDot = makeSplitBy('..')
> splitByDoubleDot('aa...a..a.a.aa.....aa..')
['aa', '.a', 'a.a.aa', '', '.aa', '']`],filePath:`string/string-array/makeSplitBy.ts`,lineNumber:13,name:`makeSplitBy`,since:`0.1.0`},{description:`Return a function expecting a separator or regex to split the provided string`,examples:[`> splitStringBy = makeSplitStringBy('a.b-c,d:e')
> splitStringBy(':')
['a.b-c,d', 'e']
> splitStringBy('-')
['a.b', 'c,d:e']`],filePath:`string/string-array/makeSplitStringBy.ts`,lineNumber:13,name:`makeSplitStringBy`,since:`0.1.0`},{description:`Return a function that splits the expected string and trims all the elements
of the returned array`,examples:[`> trimSplitByDoubleDot = makeTrimmedSplitBy('..')
> trimSplitByDoubleDot('  aa ..	a\\n..a')
['aa', 'a', 'a']`],filePath:`string/string-array/makeTrimmedSplitBy.ts`,lineNumber:16,name:`makeTrimmedSplitBy`,since:`0.1.0`}],id:`string/string-array`,inputType:`string`,label:`string → string-array`,outputType:`string-array`},{functions:[{description:`Return a function expecting a base string and checking if it ends with the provided search string.`,examples:[`> endsWithExclamationMark = makeEndsWith('!')
> endsWithExclamationMark('Hi!')
true
> endsWithExclamationMark('Who?')
false`],filePath:`string/string-boolean/makeEndsWith.ts`,lineNumber:15,name:`makeEndsWith`,since:`0.1.0`},{description:`Return a function expecting a base string and checking if it starts with the provided search string.`,examples:[`> startsWithHash = makeStartsWith('#')
> startsWithHash('# this is a bash comment')
true
> startsWithHash('This is not')
false`],filePath:`string/string-boolean/makeStartsWith.ts`,lineNumber:15,name:`makeStartsWith`,since:`0.1.0`},{description:`Return a function expecting a search string and checking if the provided base string ends with the search string.`,examples:[`> stringEndsWith = makeStringEndsWith('Hi!')
> stringEndsWith('!')
true
> stringEndsWith('?')
false`],filePath:`string/string-boolean/makeStringEndsWith.ts`,lineNumber:15,name:`makeStringEndsWith`,since:`0.1.0`},{description:`Return a function expecting a search string and checking if the provided base string starts with the search string.`,examples:[`> stringStartsWith = makeStringStartsWith('Hi!')
> stringStartsWith('H')
true
> stringStartsWith('h')
false`],filePath:`string/string-boolean/makeStringStartsWith.ts`,lineNumber:15,name:`makeStringStartsWith`,since:`0.1.0`}],id:`string/string-boolean`,inputType:`string`,label:`string → string-boolean`,outputType:`string-boolean`},{functions:[{description:`Creates a regular expression using the flags provided`,examples:[`> const regex = makeRegexOf('giu')('foo+bar')
/foo+bar/giu`],filePath:`string/string-regexp/makeRegexOf.ts`,lineNumber:12,name:`makeRegexOf`,since:`0.1.0`},{description:`Creates an escaped regular expression using the flags provided to prevent
regexp injections from source strings`,examples:[`> regex = makeSafeRegexOf('giu')('foo+bar')
/foo\\+bar/giu`],filePath:`string/string-regexp/makeSafeRegexOf.ts`,lineNumber:15,name:`makeSafeRegexOf`,since:`0.1.0`}],id:`string/string-regexp`,inputType:`string`,label:`string → string-regexp`,outputType:`string-regexp`},{functions:[{description:`Return a function that appends the provided string to the input string`,examples:[`> postfixed = makePostfixed('---')
> postfixed('A')
'A---'
> postfixed('B')
'B---'`],filePath:`string/string-string/makePostfixed.ts`,lineNumber:15,name:`makePostfixed`,since:`0.1.0`},{description:`Return a function that prepends the provided string to the input string`,examples:[`> prefixed = makePrefixed('---')
> prefixed('A')
'---A'
> prefixed('B')
'---B'`],filePath:`string/string-string/makePrefixed.ts`,lineNumber:15,name:`makePrefixed`,since:`0.1.0`}],id:`string/string-string`,inputType:`string`,label:`string → string-string`,outputType:`string-string`},{functions:[{description:`Split an array into chunks of the specified size.`,examples:[`> chunkArray([1, 2, 3, 4, 5], 2)
[[1, 2], [3, 4], [5]]
> chunkArray([1, 2, 3], 3)
[[1, 2, 3]]`],filePath:`_n_arity/2/chunkArray.ts`,lineNumber:12,name:`chunkArray`,since:`0.3.0`},{description:`Return an array by concatenating the provided arrays.`,examples:[`> concat([0, 1, 2], [3, 4], [5, 6])
[0, 1, 2, 3, 4, 5, 6]`],filePath:`_n_arity/concat.ts`,lineNumber:10,name:`concat`,since:`0.1.0`},{description:`Return true if the input string ends with the test string.`,examples:[`> endsWith('Ping', 'ing')
true
> endsWith('Pong', 'ing')
false`],filePath:`_n_arity/2/endsWith.ts`,lineNumber:12,name:`endsWith`,since:`0.1.0`},{description:"Decode a TypedArray buffer and parse it as a JS object, stripping any `export default` prefix.",examples:[`> encoder = new TextEncoder()
> buffer = encoder.encode('export default {"a": 1}')
> exportedObjBufferToAny(buffer)
{a: 1}`],filePath:`_n_arity/exportedObjBufferToAny.ts`,lineNumber:14,name:`exportedObjBufferToAny`,since:`0.1.0`},{description:`Return true if the provided value is included in the provided array.`,examples:[`> includes([0, 1, 2], 2)
true
> includes([0, 1, 2], 3)
false`],filePath:`_n_arity/2/includes.ts`,lineNumber:12,name:`includes`,since:`0.1.0`},{description:`Return a string by joining the provided array with the provided separator.`,examples:[`> join([0, 1, 2], '-')
'0-1-2'`],filePath:`_n_arity/2/join.ts`,lineNumber:10,name:`join`,since:`0.1.0`},{description:`Decode a TypedArray buffer and parse it as JSON.`,examples:[`> encoder = new TextEncoder()
> buffer = encoder.encode('{"a": 1}')
> jsonBufferToAny(buffer)
{a: 1}`],filePath:`_n_arity/jsonBufferToAny.ts`,lineNumber:12,name:`jsonBufferToAny`,since:`0.1.0`},{description:`Return a function that merges the provided value on the provided key of the
expected object.`,examples:[`> mergeFooValue = makeMergeKeyValue('foo', {b: -2, c: -3})
> mergeFooValue({foo: {a: 1, b: 2}, bar: {k: 1}})
{foo: {a: 1, b: -2, c: -3}, bar: {k: 1}}
> mergeFooValue({bar: {k: 1}})
{foo: {b: -2, c: -3}, bar: {k: 1}}`],filePath:`_n_arity/2/makeMergeKeyValue.ts`,lineNumber:18,name:`makeMergeKeyValue`,since:`0.1.0`},{description:`Return an object of occurrences of keys in the provided array containing the provided keys`,examples:[`> makeOccurrences([{a: 1}, {a: 6, b: -1}, {a: 2, b: 0, c: 1}], ['a', 'b'])
{a: 3, b: 2}`],filePath:`_n_arity/2/makeOccurrences.ts`,lineNumber:16,name:`makeOccurrences`,since:`0.1.0`},{description:`Return a function expecting two objects to merge using the provided merge function.`,examples:[`> mergeWithSubtract = mergeWith(_.subtract)
> mergeWithSubtract({a: 8, b: 3}, {a: 5, b: 2, c: 7})
{a: 3, b: 1, c: 7}`],filePath:`_n_arity/mergeWith.ts`,lineNumber:15,name:`mergeWith`,since:`0.1.0`},{description:`Return the merge of two objects appending values of correspondent keys.`,examples:[`> obj1 = {a: [1, 2, 3], b: [4, 5, 6]}
> obj2 = {a: 4, b: [7]}
> mergeWithAppendTo(obj1, obj2)
{a: [1, 2, 3, 4], b: [4, 5, 6, [7]]}`],filePath:`_n_arity/2/mergeWithAppendTo.ts`,lineNumber:18,name:`mergeWithAppendTo`,since:`0.1.0`},{description:`Return the merge of two objects concatenating values of correspondent keys.`,examples:[`> obj1 = {a: [1, 2, 3], b: [4, 5, 6]}
> obj2 = {a: [1, 2, 3], b: [4, 5, 6]}
> mergeWithConcat(obj1, obj2)
{a: [1, 2, 3, 1, 2, 3], b: [4, 5, 6, 4, 5, 6]}`],filePath:`_n_arity/2/mergeWithConcat.ts`,lineNumber:17,name:`mergeWithConcat`,since:`0.1.0`},{description:`Return the merge of two objects merging values of correspondent keys.`,examples:[`> obj1 = {A: {a: 1}, B: {b: 1}}
> obj2 = {A: {b: 10}, B: {a: 10}}
> mergeWithMerge(obj1, obj2)
{A: {a: 1, b: 10}, B: {a: 10, b: 1}}`],filePath:`_n_arity/2/mergeWithMerge.ts`,lineNumber:18,name:`mergeWithMerge`,since:`0.1.0`},{description:`Return the merge of two objects adding values of correspondent keys.`,examples:[`> mergeWithSum({a: 1, b: 2}, {a: 10, c: 1})
{a: 11, b: 2, c: 1}`],filePath:`_n_arity/2/mergeWithSum.ts`,lineNumber:16,name:`mergeWithSum`,since:`0.1.0`},{description:`Pluck unique values for the given key from the provided array of objects.`,examples:[`> pluckUniquesFrom([{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 2}], 'a')
[1, 2]`],filePath:`_n_arity/2/pluckUniquesFrom.ts`,lineNumber:12,name:`pluckUniquesFrom`,since:`0.3.0`},{description:`Return the portion of the provided string between the provided indices
(first included, second excluded). Indices can be negative.`,examples:[`> sliceString('0123456789', 3)
'3456789'
> sliceString('0123456789', 3, 5)
'34'
> sliceString('0123456789', 3, -1)
'345678'`],filePath:`_n_arity/sliceString.ts`,lineNumber:15,name:`sliceString`,since:`0.1.0`},{description:`Return an array by splitting the input string with the provided separator.`,examples:[`> split('a-b-c', '-')
['a', 'b', 'c']`],filePath:`_n_arity/2/split.ts`,lineNumber:10,name:`split`,since:`0.1.0`},{description:`Return true if the input string starts with the test string.`,examples:[`> startsWith('Ping', 'Pin')
true
> startsWith('Pong', 'Pin')
false`],filePath:`_n_arity/2/startsWith.ts`,lineNumber:12,name:`startsWith`,since:`0.1.0`},{description:`Return a copy of the array with values at the provided indices swapped`,examples:[`> swap([0, 1, 2, 3, 4, 5], 1, 4)
[0, 4, 2, 3, 1, 5]`],filePath:`_n_arity/3/swap.ts`,lineNumber:12,name:`swap`,since:`0.1.0`},{description:`Return a copy of the provided array without all instances of the provided item
if the item is in the array, or appending the item otherwise.`,examples:[`> toggleItem([0, 1, 2, 0], 0)
[1, 2]
> toggleItem([1, 2], 0)
[1, 2, 0]`],filePath:`_n_arity/2/toggleItem.ts`,lineNumber:16,name:`toggleItem`,since:`0.1.0`}],id:`arity-gt-1`,inputType:`arity-gt-1`,label:`arity-gt-1`,outputType:`arity-gt-1`}],commitHash:`69cd046fb0fa7293694f607b0964445b79c30b16`},b=l(`<span><!></span>`);function x(a,s){h(s,!0);let c={any:`bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-300`,array:`bg-emerald-100 text-emerald-800 dark:bg-emerald-800/30 dark:text-emerald-300`,generic:`bg-slate-100 text-slate-700 dark:bg-slate-700/30 dark:text-slate-300`,iterable:`bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-300`,number:`bg-rose-100 text-rose-800 dark:bg-rose-800/30 dark:text-rose-300`,object:`bg-orange-100 text-orange-800 dark:bg-orange-800/30 dark:text-orange-300`,regexp:`bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-300`,string:`bg-violet-100 text-violet-800 dark:bg-violet-800/30 dark:text-violet-300`},l=e(()=>c[s.input.split(`-`)[0]]??`bg-slate-100 text-slate-700 dark:bg-slate-700/30 dark:text-slate-300`);var g=b(),_=m(g),v=e=>{var t=r();o(()=>n(t,s.input)),u(e,t)},y=e=>{var t=r();o(()=>n(t,`${s.input??``} → ${s.output??``}`)),u(e,t)};t(_,e=>{s.input===s.output?e(v):e(y,-1)}),p(g),o(()=>d(g,1,`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-xs ${i(l)??``}`)),u(a,g),f()}var S=l(`<div class="flex flex-col gap-1"><h4 class="text-xs font-semibold uppercase tracking-wide text-[--color-fg-muted]">Example</h4> <!></div>`),C=l(`<span class="text-xs text-[--color-fg-muted]"> </span>`),w=l(`<article class="flex flex-col gap-4 pb-10"><div class="flex flex-wrap items-center gap-3"><code class="font-mono text-lg font-semibold text-[--color-fg]"> </code> <a class="font-mono text-lg text-[--color-fg-muted] opacity-40 dark:opacity-60 transition-opacity hover:opacity-80">#</a> <a rel="noopener noreferrer" target="_blank" class="text-[--color-fg-muted] opacity-40 dark:opacity-60 transition-opacity hover:opacity-80"><!></a> <!></div> <p class="text-sm leading-relaxed text-[--color-fg-muted]"> </p> <!> <!></article>`);function T(r,l){h(l,!0);let d=e(()=>`https://github.com/mindrones/datakit/blob/${l.commitHash}/packages/tx/src/${l.fn.filePath}#L${l.fn.lineNumber}`);var y=w(),b=m(y),T=m(b),E=m(T,!0);p(T);var D=s(T,2),O=s(D,2);_(m(O),{size:16}),p(O),x(s(O,2),{get input(){return l.inputType},get output(){return l.outputType}}),p(b);var k=s(b,2),A=m(k,!0);p(k);var j=s(k,2);g(j,17,()=>l.fn.examples,a,(e,t)=>{var n=S();v(s(m(n),2),{get code(){return i(t)},lang:`typescript`}),p(n),u(e,n)});var M=s(j,2),N=e=>{var t=C(),r=m(t);p(t),o(()=>n(r,`@since ${l.fn.since??``}`)),u(e,t)};t(M,e=>{l.fn.since&&e(N)}),p(y),o(()=>{n(E,l.fn.name),c(D,`href`,`#${l.fn.name??``}`),c(D,`aria-label`,`Permalink to ${l.fn.name??``}`),c(O,`href`,i(d)),c(O,`aria-label`,`View source of ${l.fn.name??``} on GitHub`),n(A,l.fn.description)}),u(r,y),f()}export{x as n,y as r,T as t};