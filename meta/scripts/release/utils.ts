import {execSync} from 'child_process';
import {readFileSync, writeFileSync} from 'fs';

import {rootDir} from './paths';

export function exec(cmd: string): string {
	return execSync(cmd, {cwd: rootDir, stdio: 'pipe'}).toString().trim();
}

export function readJson(filePath: string): Record<string, unknown> {
	return JSON.parse(readFileSync(filePath, 'utf-8'));
}

export function todayString(): string {
	const now = new Date();
	const yyyy = now.getFullYear();
	const mm = String(now.getMonth() + 1).padStart(2, '0');
	const dd = String(now.getDate()).padStart(2, '0');
	return `${yyyy}${mm}${dd}`;
}

export function writeJson(filePath: string, data: Record<string, unknown>): void {
	writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf-8');
}
