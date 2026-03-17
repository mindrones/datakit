import * as path from 'path';
import {spawnSync} from 'child_process';

import {select} from '@clack/prompts';
import {Node, Project} from 'ts-morph';

import {packagesDir, rootDir} from './paths';
import type {MissingTag, PkgRelease} from './types';

/**
 * Walk up the AST from `node` until we find a node that carries JSDoc.
 * Needed because `export const foo = ...` attaches JSDoc to the
 * VariableStatement (grandparent), not the VariableDeclaration that
 * ts-morph returns from getExportedDeclarations().
 */
function resolveJsDocs(node: Node): unknown[] {
	let current: Node | undefined = node;
	while (current) {
		const docs = (current as {getJsDocs?: () => unknown[]}).getJsDocs?.();
		if (docs && docs.length > 0) {
			return docs;
		}
		current = current.getParent();
	}
	return [];
}

export function findMissingSinceTags(releases: PkgRelease[] = []): MissingTag[] {
	const versionMap = Object.fromEntries(releases.map(r => [r.pkgName, r.newVersion]));
	const project = new Project({skipAddingFilesFromTsConfig: true});

	for (const pkgName of ['tx', 'types'] as const) {
		project.addSourceFilesAtPaths(
			path.join(packagesDir, pkgName, 'src', '**', '*.ts')
		);
	}

	const missingTags: MissingTag[] = [];

	for (const sourceFile of project.getSourceFiles()) {
		const filePath = sourceFile.getFilePath();
		const relPath = path.relative(rootDir, filePath);

		// derive pkg name from path: packages/<pkgName>/...
		const pkgName = path.relative(packagesDir, filePath).split(path.sep)[0];
		const sinceVersion = versionMap[pkgName] ?? 'x.y.z';

		for (const declaration of sourceFile.getExportedDeclarations().values()) {
			for (const decl of declaration) {
				// skip re-exports: only check declarations defined in this source file
				if (decl.getSourceFile() !== sourceFile) {
					continue;
				}

				// only check nodes that can have JSDoc (walk up for variable declarations)
				const jsDocs = resolveJsDocs(decl);

				if (jsDocs.length === 0) {
					continue;
				}

				const hasSinceTag = jsDocs.some((doc: unknown) => {
					const typedDoc = doc as {getTags: () => Array<{getTagName: () => string}>};
					return typedDoc.getTags().some(tag => tag.getTagName() === 'since');
				});

				if (!hasSinceTag) {
					const symbolName =
						(decl as {getName?: () => string}).getName?.() ?? '<anonymous>';

					missingTags.push({file: relPath, sinceVersion, symbol: symbolName});
				}
			}
		}
	}

	return missingTags;
}

export async function checkSinceTags(
	isDry: boolean,
	checkCancel: (value: unknown) => void,
	releases: PkgRelease[] = []
): Promise<void> {
	let missingSinceTags = findMissingSinceTags(releases);

	while (missingSinceTags.length > 0) {
		const maxFile = Math.max(...missingSinceTags.map(item => item.file.length));
		const lines = missingSinceTags
			.map(item => `  ${item.file.padEnd(maxFile + 2)}${item.symbol}  (@since ${item.sinceVersion})`)
			.join('\n');

		console.log(`\n⚠ Exports missing @since (${missingSinceTags.length} total):\n${lines}\n`);

		const clipboardPrompt =
			'Add `@since` JSDoc tags to the following exported symbols.\n' +
			'Each line shows the file path, symbol name, and required version:\n\n' +
			lines + '\n';

		try {
			spawnSync('pbcopy', [], {input: clipboardPrompt});
			console.log('  (prompt copied to clipboard)\n');
		} catch {
			// clipboard not available on this platform
		}

		if (isDry) {
			console.log('  [dry] auto-skipping @since prompt\n');
			break;
		}

		const action = await select({
			message: 'Add @since to the above, then press Enter to rescan — or choose skip.',
			options: [
				{label: 'rescan — I\'ve added @since, check again', value: 'rescan'},
				{label: 'skip — proceed without @since on these exports', value: 'skip'},
			],
		});
		checkCancel(action);

		if (action === 'skip') {
			break;
		}

		// check again
		missingSinceTags = findMissingSinceTags(releases);
	}
}
