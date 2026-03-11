import {readdirSync, readFileSync} from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';

import {describe, expect, it} from 'vitest';

import type {TxDocs, TypeDef} from './types.ts';

const script_dir = path.dirname(fileURLToPath(import.meta.url));
const meta_dir = path.dirname(path.dirname(script_dir));
const site_dir = path.join(meta_dir, 'site');
const generated_dir = path.join(
	site_dir,
	'src',
	'lib',
	'data',
	'generated'
);

const tx_docs = JSON.parse(
	readFileSync(path.join(generated_dir, 'tx.json'), 'utf-8')
) as TxDocs;
const txCategories = tx_docs.categories;

const types_json = JSON.parse(
	readFileSync(path.join(generated_dir, 'types.json'), 'utf-8')
) as Record<string, TypeDef[]>;

describe('tx.json', () => {
	it('is a non-empty array', () => {
		expect(Array.isArray(txCategories)).toBe(true);
		expect(txCategories.length).toBeGreaterThan(0);
	});

	it('every category has required fields', () => {
		for (const category of txCategories) {
			expect(category).toHaveProperty('id');
			expect(category).toHaveProperty('inputType');
			expect(category).toHaveProperty('label');
			expect(category).toHaveProperty('outputType');
			expect(category).toHaveProperty('functions');
			expect(Array.isArray(category.functions)).toBe(true);
		}
	});

	it('every function has required fields', () => {
		for (const category of txCategories) {
			for (const fn of category.functions) {
				expect(fn).toHaveProperty('name');
				expect(fn).toHaveProperty('description');
				expect(fn).toHaveProperty('examples');
				expect(fn).toHaveProperty('filePath');
			}
		}
	});

	describe('string/string category', () => {
		const category = txCategories.find(c => c.id === 'string/string');

		it('exists', () => {
			expect(category).toBeDefined();
		});

		it('has correct metadata', () => {
			expect(category?.inputType).toBe('string');
			expect(category?.outputType).toBe('string');
			expect(category?.label).toBe('string → string');
		});

		it('contains capitalize, decapitalize, trim, trimLastNewline', () => {
			const names = category?.functions.map(fn => fn.name);
			expect(names).toContain('capitalize');
			expect(names).toContain('decapitalize');
			expect(names).toContain('trim');
			expect(names).toContain('trimLastNewline');
		});

		it('functions are sorted alphabetically', () => {
			const names = category?.functions.map(fn => fn.name) ?? [];
			expect(names).toEqual([...names].sort());
		});
	});

	it('categories are sorted alphabetically by id, with arity-gt-1 pinned last', () => {
		const ids = txCategories.map(c => c.id);
		const ids_without_arity = ids.filter(id => id !== 'arity-gt-1');
		expect(ids_without_arity).toEqual([...ids_without_arity].sort());
		expect(ids.at(-1)).toBe('arity-gt-1');
	});

	it('category ids match the directory structure of packages/tx/src', () => {
		const repo_root = path.dirname(path.dirname(site_dir));
		const tx_src = path.join(repo_root, 'packages', 'tx', 'src');

		function listDirs(dir: string): string[] {
			return readdirSync(dir, {withFileTypes: true})
				.filter(entry => entry.isDirectory())
				.map(entry => entry.name)
				.sort();
		}

		function hasFunctions(dir: string): boolean {
			return readdirSync(dir).some(
				name =>
					name.endsWith('.ts') &&
					name !== 'index.ts' &&
					!name.endsWith('.test.ts')
			);
		}

		function normalizeDirName(name: string): string {
			return name.replace(/^_/, '').replace(/_/g, '-');
		}

		const expected_ids: string[] = [];

		for (const top_dir of listDirs(tx_src)) {
			const sub_dirs = listDirs(path.join(tx_src, top_dir));
			const normalized_top = normalizeDirName(top_dir);

			// _n_arity and all its sub-dirs flatten to one 'arity-gt-1' category
			if (top_dir === '_n_arity') {
				expected_ids.push('arity-gt-1');
				continue;
			}

			if (sub_dirs.length === 0) {
				if (hasFunctions(path.join(tx_src, top_dir))) {
					expected_ids.push(normalized_top);
				}
			} else {
				for (const sub_dir of sub_dirs) {
					if (hasFunctions(path.join(tx_src, top_dir, sub_dir))) {
						expected_ids.push(`${normalized_top}/${sub_dir}`);
					}
				}
			}
		}

		expected_ids.sort();

		expect(txCategories.map(c => c.id).sort()).toEqual(expected_ids);
	});
});

describe('types.json', () => {
	it('has expected top-level keys', () => {
		expect(Object.keys(types_json)).toEqual(
			expect.arrayContaining(['array', 'function', 'object', 'shared'])
		);
	});

	it('every type def has required fields', () => {
		for (const defs of Object.values(types_json)) {
			for (const def of defs) {
				expect(def).toHaveProperty('name');
				expect(def).toHaveProperty('description');
				expect(def).toHaveProperty('source');
				expect(def).toHaveProperty('file');
			}
		}
	});

	describe('function types', () => {
		it('contains Fn and Predicate', () => {
			const names = types_json['function'].map(t => t.name);
			expect(names).toContain('Fn');
			expect(names).toContain('Predicate');
		});

		it('Fn has a non-empty source', () => {
			const fn = types_json['function'].find(t => t.name === 'Fn');
			expect(fn?.source).toMatch(/export type Fn/);
		});
	});

	describe('object types', () => {
		it('contains Obj, ObjK', () => {
			const names = types_json['object'].map(t => t.name);
			expect(names).toContain('Obj');
			expect(names).toContain('ObjK');
		});
	});

	describe('array types', () => {
		it('contains Pair', () => {
			const names = types_json['array'].map(t => t.name);
			expect(names).toContain('Pair');
		});
	});

	it('has exactly these type names per group', () => {
		const names_by_group = Object.fromEntries(
			Object.entries(types_json).map(([key, defs]) => [
				key,
				defs.map(d => d.name),
			])
		);
		expect(names_by_group).toEqual({
			array: ['Pair'],
			function: ['Fn', 'Predicate', 'Action', 'ActionKL', 'Effect'],
			object: [
				'Obj',
				'ObjK',
				'ObjL',
				'ObjV',
				'ObjVs',
				'FnMap',
				'ObjKL',
				'ObjKV',
				'ObjLV',
				'ObjKLV',
				'ObjKVs',
				'ObjLVs',
				'ObjKLVs',
			],
			shared: ['HasLength', 'HasSize'],
		});
	});

	it('most types have no @since — since is absent or a non-empty string when present', () => {
		const all_defs = Object.values(types_json).flat();
		for (const def of all_defs) {
			if (def.since !== undefined) {
				expect(def.since).not.toBe('');
			}
		}
		const types_without_since = all_defs.filter(d => d.since === undefined);
		expect(types_without_since.length).toBeGreaterThan(0);
	});
});
