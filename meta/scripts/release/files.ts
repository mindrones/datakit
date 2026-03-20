import {readFileSync, writeFileSync} from 'fs';

import {changelogPath, pkgJsonPath, releasemdPath} from './paths';
import type {PkgRelease} from './types';
import {readJson, writeJson} from './utils';

export function writeReleaseFiles(releases: PkgRelease[], today: string): void {
	for (const release of releases) {
		/* Bump version in package.json */
		const pkgPath = pkgJsonPath(release.pkgName);
		const pkgData = readJson(pkgPath);
		pkgData.version = release.newVersion;
		writeJson(pkgPath, pkgData);

		/* Rename ## next in CHANGELOG.md */
		const clPath = changelogPath(release.pkgName);
		try {
			const content = readFileSync(clPath, 'utf-8');
			const updated = content.replace(
				/^## next\s*$/m,
				`## v${release.newVersion}\n`
			);
			writeFileSync(clPath, updated, 'utf-8');
		} catch {
			// no changelog or no ## next — skip silently
		}
	}

	/* Update root RELEASE.md */
	const releaseMd = releasemdPath();
	const existingRelease = readFileSync(releaseMd, 'utf-8');
	const releaseEntries = releases
		.map(r => `- [\`${r.displayName}@${r.newVersion}\`](./packages/${r.pkgName}/CHANGELOG.md#v${r.newVersion.replace(/\./g, '')})`)
		.join('\n');
	const newReleaseMd = `## ${today}\n\n${releaseEntries}\n\n` + existingRelease;
	writeFileSync(releaseMd, newReleaseMd, 'utf-8');
}
