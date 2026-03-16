import {spawnSync} from 'child_process';

import {spinner} from '@clack/prompts';

import {rootDir} from './paths';
import {exec} from './utils';

export function checkBranch(isDry = false): string {
	const currentBranch = exec('git rev-parse --abbrev-ref HEAD');
	if (!isDry && currentBranch !== 'dev') {
		console.error(
			`\nYou are on branch "${currentBranch}". Releases must happen on the "dev" branch.\n` +
			`Merge your work to dev first, then re-run.\n`
		);
		process.exit(1);
	}
	return currentBranch;
}

export function checkCleanTree(): void {
	const spin = spinner();
	spin.start('checking git working tree …');
	const gitStatus = exec('git status --porcelain');
	if (gitStatus.length > 0) {
		spin.stop('working tree is dirty');
		console.error('\nWorking tree has uncommitted changes. Commit or stash them first.\n');
		process.exit(1);
	}
	spin.stop('working tree clean');
}

export function checkNpmAuth(): void {
	const spin = spinner();
	spin.start('checking npm auth …');
	try {
		exec('npm whoami');
		spin.stop('npm auth OK');
	} catch {
		spin.stop('not logged in to npm — running npm login …');
		const result = spawnSync('npm', ['login'], {cwd: rootDir, stdio: 'inherit'});
		if (result.status !== 0) {
			console.error('\nnpm login failed. Aborting.\n');
			process.exit(1);
		}
	}
}
