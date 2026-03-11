import {execSync} from 'child_process';
import {mkdirSync, writeFileSync} from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';

import {Project} from 'ts-morph';
import type {JSDocTag} from 'ts-morph';

import type {TxCategory, TxDocs, TxFunction, TypeDef} from './types';

/* Directories */

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const metaDir = path.dirname(path.dirname(scriptDir));
const repoDir = path.dirname(metaDir);
const packagesDir = path.join(repoDir, 'packages');
const siteDir = path.join(metaDir, 'site');

const txSrcDir = path.join(packagesDir, 'tx', 'src');
const typesSrcDir = path.join(packagesDir, 'types', 'src');
const outputDir = path.join(siteDir, 'src', 'lib', 'data', 'generated');

/* Helpers */

function getTagText(tag: JSDocTag): string {
	const text = tag.getText();
	return text
		.replace(/^@\w+\s*/, '')
		.split('\n')
		.map(line => line.replace(/^\s*\*\s?/, ''))
		.join('\n')
		.trim();
}

function deriveCategory(dirParts: string[]): {
	id: string;
	inputType: string;
	label: string;
	outputType: string;
} {
	// _n_arity/ and _n_arity/2/, _n_arity/3/ → all flatten to arity-gt-1
	if (dirParts[0] === '_n_arity') {
		return {
			id: 'arity-gt-1',
			inputType: 'arity-gt-1',
			label: 'arity-gt-1',
			outputType: 'arity-gt-1',
		};
	}

	// _sorters/ (flat) → sorters
	if (dirParts[0] === '_sorters') {
		return {
			id: 'sorters',
			inputType: 'sorters',
			label: 'sorters',
			outputType: 'sorters',
		};
	}

	// normal: inputType/outputType/
	const inputType = dirParts[0];
	const outputType = dirParts[1];

	return {
		id: `${inputType}/${outputType}`,
		inputType,
		label: `${inputType} → ${outputType}`,
		outputType,
	};
}

/* Extract @datakit/tx functions */

function extractTxFunctions(): TxCategory[] {
	const project = new Project({skipAddingFilesFromTsConfig: true});
	project.addSourceFilesAtPaths(`${txSrcDir}/**/*.ts`);

	const categories = new Map<string, TxCategory>();

	for (const sourceFile of project.getSourceFiles()) {
		const absPath = sourceFile.getFilePath();
		const relPath = path.relative(txSrcDir, absPath);

		// skip index files and test files
		const fileName = path.basename(relPath);
		if (fileName === 'index.ts' || fileName.endsWith('.test.ts')) {
			continue;
		}

		const parts = relPath.split('/');
		const dirParts = parts.slice(0, -1);

		// skip any unexpected shallow paths
		if (dirParts.length === 0) continue;

		const category_meta = deriveCategory(dirParts);

		/* find the first exported variable statement or function declaration */
		const varStatements = sourceFile
			.getVariableStatements()
			.filter(s => s.isExported());
		const fnDeclarations = sourceFile
			.getFunctions()
			.filter(f => f.isExported());

		const jsdocNode = varStatements[0] ?? fnDeclarations[0];
		if (!jsdocNode) continue;

		const varDecl = varStatements[0]?.getDeclarations()[0];
		const fnDecl = fnDeclarations[0];
		const name = varDecl?.getName() ?? fnDecl?.getName() ?? '';
		const declarationNode = varStatements[0] ?? fnDeclarations[0];
		const lineNumber = declarationNode.getStartLineNumber();
		if (!name) continue;

		const jsDocs = jsdocNode.getJsDocs();
		const jsDoc = jsDocs[0];

		const description = jsDoc?.getDescription().trim() ?? '';
		const tags = jsDoc?.getTags() ?? [];

		const examples = tags
			.filter(t => t.getTagName() === 'example')
			.map(t => getTagText(t));

		const sinceTag = tags.find(t => t.getTagName() === 'since');
		const since = sinceTag ? getTagText(sinceTag) : undefined;

		const txFunction: TxFunction = {
			description,
			examples,
			filePath: relPath,
			lineNumber,
			name,
			since,
		};

		const existing = categories.get(category_meta.id);
		if (existing) {
			existing.functions.push(txFunction);
		} else {
			categories.set(category_meta.id, {
				functions: [txFunction],
				id: category_meta.id,
				inputType: category_meta.inputType,
				label: category_meta.label,
				outputType: category_meta.outputType,
			});
		}
	}

	/* sort categories by id, pinning arity-gt-1 last */
	const sorted = [...categories.values()].sort((a, b) => {
		if (a.id === 'arity-gt-1') return 1;
		if (b.id === 'arity-gt-1') return -1;
		return a.id.localeCompare(b.id);
	});

	for (const category of sorted) {
		category.functions.sort((a, b) => a.name.localeCompare(b.name));
	}

	return sorted;
}

/* Extract @datakit/types definitions */

type TypesFileName = 'array' | 'function' | 'object' | 'shared';

function extractTypeDefs(): Record<TypesFileName, TypeDef[]> {
	const project = new Project({skipAddingFilesFromTsConfig: true});

	const typeFiles: TypesFileName[] = ['array', 'function', 'object', 'shared'];
	for (const file of typeFiles) {
		project.addSourceFileAtPath(path.join(typesSrcDir, `${file}.ts`));
	}

	const result = {} as Record<TypesFileName, TypeDef[]>;

	for (const sourceFile of project.getSourceFiles()) {
		const fileName = path.basename(
			sourceFile.getFilePath(),
			'.ts'
		) as TypesFileName;

		const typeDefs: TypeDef[] = [];

		/* type aliases */
		for (const typeAlias of sourceFile.getTypeAliases()) {
			if (!typeAlias.isExported()) continue;

			const jsDocs = typeAlias.getJsDocs();
			const jsDoc = jsDocs[0];

			const description = jsDoc?.getDescription().trim() ?? '';
			const tags = jsDoc?.getTags() ?? [];
			const sinceTag = tags.find(t => t.getTagName() === 'since');
			const since = sinceTag ? getTagText(sinceTag) : undefined;

			typeDefs.push({
				description,
				file: fileName,
				name: typeAlias.getName(),
				since,
				source: typeAlias.getText(),
			});
		}

		/* interfaces */
		for (const iface of sourceFile.getInterfaces()) {
			if (!iface.isExported()) continue;

			const jsDocs = iface.getJsDocs();
			const jsDoc = jsDocs[0];

			const description = jsDoc?.getDescription().trim() ?? '';
			const tags = jsDoc?.getTags() ?? [];
			const sinceTag = tags.find(t => t.getTagName() === 'since');
			const since = sinceTag ? getTagText(sinceTag) : undefined;

			typeDefs.push({
				description,
				file: fileName,
				name: iface.getName(),
				since,
				source: iface.getText(),
			});
		}

		result[fileName] = typeDefs;
	}

	return result;
}

/* Main */

mkdirSync(outputDir, {recursive: true});

const commitHash = execSync('git rev-parse HEAD', {cwd: packagesDir}).toString().trim();
console.log(`  → commit hash: ${commitHash}`);

console.log('Extracting @datakit/tx functions…');
const txCategories = extractTxFunctions();
const txDocs: TxDocs = {categories: txCategories, commitHash};
writeFileSync(
	path.join(outputDir, 'tx.json'),
	JSON.stringify(txDocs, null, '\t'),
	'utf-8'
);
console.log(`  → ${txCategories.length} categories written to tx.json`);

console.log('Extracting @datakit/types definitions…');
const typeDefs = extractTypeDefs();
writeFileSync(
	path.join(outputDir, 'types.json'),
	JSON.stringify(typeDefs, null, '\t'),
	'utf-8'
);
const typeCount = Object.values(typeDefs).flat().length;
console.log(`  → ${typeCount} type definitions written to types.json`);
