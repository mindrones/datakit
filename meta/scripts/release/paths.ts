import * as path from 'path';
import {fileURLToPath} from 'url';

import type {PkgName} from './types.ts';

// meta/scripts/release/paths.ts → meta/scripts/release/ → meta/scripts/ → meta/ → root/
const releaseDir = path.dirname(fileURLToPath(import.meta.url));
const scriptsDir = path.dirname(releaseDir);
const metaDir = path.dirname(scriptsDir);
export const rootDir = path.dirname(metaDir);
export const packagesDir = path.join(rootDir, 'packages');

export function changelogPath(pkgName: PkgName): string {
	return path.join(packagesDir, pkgName, 'CHANGELOG.md');
}

export function pkgJsonPath(pkgName: PkgName): string {
	return path.join(packagesDir, pkgName, 'package.json');
}

export function releasemdPath(): string {
	return path.join(rootDir, 'RELEASE.md');
}
