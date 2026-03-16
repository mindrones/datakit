import {execSync} from 'child_process';

import {spinner} from '@clack/prompts';

import {rootDir} from './paths';
import type {PkgRelease} from './types';

export function buildSite(): void {
	const spin = spinner();
	spin.start('building site …');
	try {
		execSync('pnpm --filter @datakit/site build', {cwd: rootDir, stdio: 'pipe'});
		spin.stop('site built ✔');
	} catch (err) {
		const error = err as {stderr?: Buffer; stdout?: Buffer};
		spin.stop('site build failed');
		const output = error.stderr?.toString() || error.stdout?.toString() || String(err);
		console.error('\n' + output);
		process.exit(1);
	}
}

export function deploySite(): void {
	const spin = spinner();
	spin.start('deploying …');
	try {
		execSync('pnpm --filter @datakit/site deploy', {cwd: rootDir, stdio: 'pipe'});
		spin.stop('deployed ✔');
	} catch (err) {
		const error = err as {stderr?: Buffer; stdout?: Buffer};
		spin.stop('deploy failed');
		const output = error.stderr?.toString() || error.stdout?.toString() || String(err);
		console.error('\n' + output);
		console.error('\nRun manually: pnpm --filter @datakit/site deploy\n');
		process.exit(1);
	}
}

export function publishPackages(releases: PkgRelease[]): void {
	const filters = releases.map(r => `--filter ${r.displayName}`).join(' ');

	const spin = spinner();
	spin.start('publishing to npm …');
	try {
		execSync(`pnpm publish ${filters}`, {cwd: rootDir, stdio: 'pipe'});
		spin.stop('published ✔');
	} catch (err) {
		const error = err as {stderr?: Buffer; stdout?: Buffer};
		spin.stop('publish failed');
		const output = error.stderr?.toString() || error.stdout?.toString() || String(err);
		console.error('\n' + output);
		console.error(
			'\nCommit + tag already pushed. Run manually:\n' +
			releases.map(r => `  pnpm publish --filter ${r.displayName}`).join('\n') + '\n'
		);
		process.exit(1);
	}
}
