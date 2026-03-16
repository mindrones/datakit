import {spinner} from '@clack/prompts';

import type {PkgRelease} from './types';
import {exec} from './utils';

export function commitRelease(releases: PkgRelease[], commitMsg: string): void {
	const stagedFiles = [
		...releases.map(r => `packages/${r.pkgName}/package.json`),
		...releases.map(r => `packages/${r.pkgName}/CHANGELOG.md`),
		'RELEASE.md',
	];

	const spin = spinner();
	spin.start('committing …');
	try {
		exec(`git add ${stagedFiles.join(' ')}`);
		exec(`git commit -m "${commitMsg}"`);
		spin.stop('committed ✔');
	} catch (err) {
		spin.stop('commit failed');
		console.error('\n' + String(err));
		console.error('\nRun: git reset HEAD && git checkout -- . to recover.\n');
		process.exit(1);
	}
}

export function pushRelease(): void {
	const spin = spinner();
	spin.start('pushing …');
	try {
		exec('git push origin HEAD --follow-tags');
		spin.stop('pushed ✔');
	} catch (err) {
		spin.stop('push failed');
		console.error('\n' + String(err));
		console.error(
			'\nRun: git pull --rebase origin dev  then retry: git push origin HEAD --follow-tags\n'
		);
		process.exit(1);
	}
}

export function resolveTag(today: string): string {
	const localTags = exec('git tag -l').split('\n').filter(Boolean);
	if (!localTags.includes(today)) {
		return today;
	}

	// check if today's tag is on remote
	let remoteTags: string[] = [];
	try {
		remoteTags = exec('git ls-remote --tags origin')
			.split('\n')
			.filter(Boolean)
			.map(line => line.split('/').pop() ?? '');
	} catch {
		// ignore network errors
	}

	if (!remoteTags.includes(today)) {
		// exists locally but not on remote — warn
		console.error(
			`\n⚠ tag ${today} exists locally but not on remote — previous run may` +
			` have failed at push.\n` +
			`Run: git push origin HEAD --follow-tags   to retry, or\n` +
			`     git tag -d ${today}                   to discard and start fresh.\n`
		);
		process.exit(1);
	}

	// increment suffix for same-day re-release
	let idx = 2;
	while (localTags.includes(`${today}-${idx}`)) {
		idx++;
	}
	return `${today}-${idx}`;
}

export function tagRelease(tag: string, releases: PkgRelease[]): void {
	const spin = spinner();
	spin.start('tagging …');
	try {
		const tagMsg = releases.map(r => `${r.displayName}@${r.newVersion}`).join(' ');
		exec(`git tag -a ${tag} -m "${tagMsg}"`);
		spin.stop(`tagged ✔  ${tag}`);
	} catch (err) {
		spin.stop('tag failed');
		console.error('\n' + String(err));
		process.exit(1);
	}
}
