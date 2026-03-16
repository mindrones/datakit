import {existsSync, readFileSync, readdirSync} from 'fs';

import {changelogPath, packagesDir, pkgJsonPath} from './paths';
import type {PkgName} from './types';
import {readJson} from './utils';

function getPublishablePackages(): readonly string[] {
	return readdirSync(packagesDir).filter(name => {
		const jsonPath = pkgJsonPath(name);
		if (!existsSync(jsonPath)) return false;
		return readJson(jsonPath)['private'] !== true;
	});
}

export const publishablePackages = getPublishablePackages();

export function getPkgDisplayName(pkgName: PkgName): string {
	const pkg = readJson(pkgJsonPath(pkgName));
	return pkg.name as string;
}

export function getPkgVersion(pkgName: PkgName): string {
	const pkg = readJson(pkgJsonPath(pkgName));
	return pkg.version as string;
}

export function hasNextInChangelog(pkgName: PkgName): boolean {
	try {
		const content = readFileSync(changelogPath(pkgName), 'utf-8');
		return content.split('\n').some(line => /^## next\s*$/.test(line));
	} catch {
		return false;
	}
}
