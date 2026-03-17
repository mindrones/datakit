import {execSync} from 'child_process';

import {spinner} from '@clack/prompts';

import {rootDir} from './paths';

export type GateKey = 'test' | 'typecheck' | 'lint';

export const GATES: Array<{key: GateKey; cmd: string; label: string}> = [
	{key: 'test',      cmd: 'pnpm test --run', label: 'running tests …'},
	{key: 'typecheck', cmd: 'pnpm typecheck',   label: 'running typecheck …'},
	{key: 'lint',      cmd: 'pnpm lint',        label: 'running lint …'},
];

export const PUBLISH_DRY_RUN = {
	cmd: 'pnpm publish -r --dry-run',
	label: 'pnpm publish --dry-run …',
};

function runGate(gate: {cmd: string; label: string}): void {
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

export function runSelectedGates(keys: GateKey[]): void {
	for (const gate of GATES) {
		if (keys.includes(gate.key)) {
			runGate(gate);
		}
	}
}

export function runPublishDryRun(): void {
	runGate(PUBLISH_DRY_RUN);
}
