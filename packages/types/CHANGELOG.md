# @datakit/types

## next

- add `Maybe`, `Nullable`, `Nilable`
- rename `shared.ts` to `shape.ts`

## v0.2.0

- open `ObjK`/`ObjL`/`ObjV`/`ObjVs` to extra properties:
Change the default Rest parameter from `{}` to `Obj<unknown>` in ObjK,
ObjL, ObjV and ObjVs. Without this, unparameterised uses resolved to
closed types (e.g. `ObjL` == `{label: string}`)

- add the missing `ObjLV` and `ObjLVs` composite interfaces, consistent
with the rest of the key/label/value/values family.

## 0.1.0

- arrays: add `Pair`
- functions: add `Fn`, `Predicate`, `Action`, `ActionKL`, `Effect`
- objects:
	- add `Obj`
	- add key/label/value/values objects: `ObjK`, `ObjL`, `ObjV`, `ObjKL`, `ObjKV`, `ObjKLV`, `ObjKVs`, `ObjKLVs`
