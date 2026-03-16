import {execSync} from 'child_process';

import {spinner} from '@clack/prompts';

import {rootDir} from './paths';

const GATES: Array<{cmd: string; label: string}> = [
	{cmd: 'pnpm test --run', label: 'running tests …'},
	{cmd: 'pnpm typecheck', label: 'running typecheck …'},
	{cmd: 'pnpm lint', label: 'running lint …'},
	{cmd: 'pnpm publish -r --dry-run', label: 'pnpm publish --dry-run …'},
];

export function runQualityGates(): void {
	for (const gate of GATES) {
		const spin = spinner();
		spin.start(gate.label);
		try {
			execSync(gate.cmd, {cwd: rootDir, stdio: 'pipe'});
			spin.stop(gate.label.replace(' …', '') + ' ✔');
		} catch (err) {
			const error = err as {stderr?: Buffer; stdout?: Buffer};
			spin.stop(gate.label.replace(' …', '') + ' ✗');
			const output =
				error.stderr?.toString() || error.stdout?.toString() || String(err);
			console.error('\n' + output);
			process.exit(1);
		}
	}
}
