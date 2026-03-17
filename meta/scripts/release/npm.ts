import {spawnSync} from 'child_process';

import {spinner} from '@clack/prompts';

import type {PkgRelease} from './types';

import {rootDir} from './paths';

export function publishPackages(releases: PkgRelease[]): void {
	const filterArgs = releases.flatMap(r => ['--filter', r.displayName]);

	const spin = spinner();
	spin.start('publishing to npm …');
	spin.stop('');

	// use spawnSync with stdio: 'inherit' so npm can show the URL and wait for authentication
	const result = spawnSync(
		'pnpm',
		[...filterArgs, 'publish', '--access', 'public', '--no-git-checks'],
		{cwd: rootDir, stdio: 'inherit'}
	);

	if (result.status !== 0) {
		console.error(
			'\nCommit + tag already pushed. Run manually:\n' +
			releases.map(r => `  pnpm --filter ${r.displayName} publish --access public --no-git-checks`).join('\n') + '\n'
		);
		process.exit(1);
	}

	console.log('published ✔\n');
}
