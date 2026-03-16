import * as path from 'path';

import {select} from '@clack/prompts';
import {Project} from 'ts-morph';

import {packagesDir, rootDir} from './paths';
import type {MissingTag} from './types';

export function findMissingSinceTags(): MissingTag[] {
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

		for (const declaration of sourceFile.getExportedDeclarations().values()) {
			for (const decl of declaration) {
				// only check nodes that can have JSDoc
				const jsDocs = (decl as {getJsDocs?: () => unknown[]}).getJsDocs?.() ?? [];

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

					missingTags.push({file: relPath, symbol: symbolName});
				}
			}
		}
	}

	return missingTags;
}

export async function checkSinceTags(
	isDry: boolean,
	checkCancel: (value: unknown) => void
): Promise<void> {
	let missingSinceTags = findMissingSinceTags();

	while (missingSinceTags.length > 0) {
		const maxFile = Math.max(...missingSinceTags.map(item => item.file.length));
		const lines = missingSinceTags
			.map(item => `  ${item.file.padEnd(maxFile + 2)}${item.symbol}`)
			.join('\n');

		console.log(`\n⚠ Exports missing @since (${missingSinceTags.length} total):\n${lines}\n`);

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
		missingSinceTags = findMissingSinceTags();
	}
}
