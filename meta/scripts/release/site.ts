import {execSync} from 'child_process';

import {spinner} from '@clack/prompts';

import {rootDir} from './paths';

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
		execSync('pnpm --filter @datakit/site run publish', {cwd: rootDir, stdio: 'pipe'});
		spin.stop('deployed ✔');
	} catch (err) {
		const error = err as {stderr?: Buffer; stdout?: Buffer};
		spin.stop('deploy failed');
		const output = error.stderr?.toString() || error.stdout?.toString() || String(err);
		console.error('\n' + output);
		console.error('\nRun manually: pnpm --filter @datakit/site run publish\n');
		process.exit(1);
	}
}
