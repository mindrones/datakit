import {
	cancel,
	intro,
	isCancel,
	multiselect,
	note,
	outro,
	select,
	text,
} from '@clack/prompts';
import {Command} from 'commander';
import semver from 'semver';

import {checkSinceTags, findMissingSinceTags} from './annotation-check';
import {writeReleaseFiles} from './files';
import {commitRelease, pushRelease, resolveTag, stageFiles, tagRelease} from './git';
import {publishPackages} from './npm';
import {buildSite, deploySite} from './site';
import {getPkgDisplayName, getPkgVersion, hasNextInChangelog, publishablePackages} from './packages';
import {checkBranch, checkCleanTree, checkNpmAuth} from './preflight';
import {GATES, runPublishDryRun, runSelectedGates} from './quality-gates';
import {todayString} from './utils';

import type {PkgName, PkgRelease} from './types';

const program = new Command()
	.name('pnpm release')
	.description('datakit release script')
	.option('--dry', 'simulate the full run (no writes, no git, no npm)')
	.option('--packages <list>', 'comma-separated packages to release: tx, types, eslint')
	.option('--bump <type>', 'bump type for all selected packages', value => {
		if (!['patch', 'minor'].includes(value)) {
			program.error('--bump must be "patch" or "minor". Major releases require interactive mode.');
		}
		return value as 'patch' | 'minor';
	})
	.option('--yes', 'auto-confirm at Step 4 (requires --packages and --bump)')
	.option('--no-deploy', 'skip the optional site deploy step (Step 10)')
	.helpOption('-h, --help', 'show this help message');

program.parse();

const opts = program.opts<{
	dry: boolean;
	packages?: string;
	bump?: 'patch' | 'minor';
	yes: boolean;
	deploy: boolean;
}>();

const isDry       = opts.dry ?? false;
const isYes       = opts.yes ?? false;
const isNoDeploy  = !(opts.deploy ?? true);
const packagesArg = opts.packages;
const bumpArg     = opts.bump;

function abort(msg?: string): never {
	cancel(msg ?? 'Cancelled.');
	process.exit(0);
}

function checkCancel(value: unknown): void {
	if (isCancel(value)) {
		abort();
	}
}

/* Main */

async function main(): Promise<void> {
	intro(
		isDry  ? 'datakit release — DRY RUN (no files written, no git, no npm)' :
			isYes  ? 'datakit release — AUTO (non-interactive)' :
				'datakit release'
	);

	/* Steps 0 — Pre-flight checks */

	if (isYes && (!packagesArg || !bumpArg)) {
		console.error('Error: --yes requires both --packages and --bump.\n  Example: pnpm release --packages tx,types --bump minor --yes --no-deploy\n');
		process.exit(1);
	}

	if (bumpArg !== undefined && !['patch', 'minor'].includes(bumpArg)) {
		console.error('Error: --bump must be "patch" or "minor". Major releases require interactive mode.\n');
		process.exit(1);
	}

	if (isDry) {
		console.log('  [dry] skipping npm auth check\n');
		console.log('  [dry] skipping clean tree check\n');
		console.log('  [dry] skipping branch check\n');
	} else {
		const isDirty = checkCleanTree();
		if (isDirty) {
			if (isYes) {
				console.log('  [auto] working tree is dirty — continuing anyway\n');
			} else {
				const dirtyAnswer = await select({
					message: 'Working tree has uncommitted changes. Continue anyway?',
					options: [
						{label: 'yes — continue with dirty tree', value: 'yes'},
						{label: 'no — abort and commit/stash changes first', value: 'no'},
					],
				});
				checkCancel(dirtyAnswer);
				if (dirtyAnswer === 'no') {
					abort('Aborted. Commit or stash your changes first.');
				}
			}
		}
	}
	const currentBranch = checkBranch(isDry);

	/* Pre-run tag detection */

	const today = todayString();
	resolveTag(today); // exits if local-only conflict

	/* Quality gates */

	if (isYes) {
		console.log('  [auto] running all quality gates\n');
		runSelectedGates(GATES.map(g => g.key));
	} else {
		const gateAnswer = await multiselect({
			message: 'Select quality gates to run (space to toggle, enter to confirm):',
			options: GATES.map(g => ({label: g.label.replace(' …', ''), value: g.key})),
			initialValues: GATES.map(g => g.key),
			required: false,
		});
		checkCancel(gateAnswer);
		if ((gateAnswer as string[]).length > 0) {
			runSelectedGates(gateAnswer as Parameters<typeof runSelectedGates>[0]);
		} else {
			console.log('  skipped all quality gates\n');
		}
	}

	/* Steps 2–4 — Select packages / bump / confirm loop */

	let releases: PkgRelease[];
	let confirmed = false;
	let commitMsg = '';
	let skipToStaging = false;
	let step = 2;

	if (!isYes) {
		const modeAnswer = await select({
			message: 'Bump package versions, or skip straight to staging?',
			options: [
				{label: 'bump — select packages and bump versions', value: 'bump'},
				{label: 'skip — versions already bumped, go straight to staging', value: 'skip'},
			],
		});
		checkCancel(modeAnswer);
		skipToStaging = modeAnswer === 'skip';
	}

	/* Step 2 — Select packages (always, so we know which files to stage) */

	{
		const options = publishablePackages.map(pkgName => {
			const version = getPkgVersion(pkgName);
			const displayName = getPkgDisplayName(pkgName);
			const hasNext = hasNextInChangelog(pkgName);
			const hint = hasNext ? 'has ## next in CHANGELOG' : 'no ## next in CHANGELOG';
			return {
				hint: `currently ${version},  ${hint}`,
				label: displayName,
				value: pkgName,
			};
		});

		let selectedPkgs: PkgName[];

		if (isDry) {
			selectedPkgs = publishablePackages.filter(hasNextInChangelog);
			if (selectedPkgs.length === 0) {
				selectedPkgs = [...publishablePackages];
			}
			console.log(`  [dry] auto-selected: ${selectedPkgs.map(getPkgDisplayName).join(', ')}\n`);
		} else if (packagesArg) {
			const rawList = packagesArg.split(',').map(s => s.trim()) as PkgName[];
			const invalid = rawList.filter(
				p => !(publishablePackages as readonly string[]).includes(p)
			);
			if (invalid.length > 0) {
				abort(`Unknown packages: ${invalid.join(', ')}. Valid: ${publishablePackages.join(', ')}`);
			}
			selectedPkgs = rawList;
			console.log(`  [auto] packages: ${selectedPkgs.map(getPkgDisplayName).join(', ')}\n`);
		} else {
			const selected = await multiselect({
				initialValues: [],
				message: 'Which packages to release? (space to toggle)',
				options,
				required: false,
			});
			checkCancel(selected);

			if (!Array.isArray(selected) || selected.length === 0) {
				abort('No packages selected.');
			}

			selectedPkgs = selected as PkgName[];
		}

		releases = selectedPkgs.map(pkgName => ({
			bump: 'patch',
			displayName: getPkgDisplayName(pkgName),
			newVersion: '',
			oldVersion: getPkgVersion(pkgName),
			pkgName,
		}));

		if (skipToStaging) {
			confirmed = true;
			commitMsg = 'release ' + selectedPkgs
				.map(pkgName => `${getPkgDisplayName(pkgName)}@${getPkgVersion(pkgName)}`)
				.join(' ');
		} else {
			step = 3;
		}
	}

	while (!skipToStaging && step <= 4) {
		if (step === 3) {
			/* Step 3 — Bump type per package */

			for (const release of releases) {
				if (isDry) {
					// auto-patch
					release.bump = 'patch';
					release.newVersion = semver.inc(release.oldVersion, 'patch') as string;
					console.log(`  [dry] ${release.displayName}: patch → ${release.newVersion}`);
					continue;
				}

				if (bumpArg) {
					release.bump = bumpArg;
					release.newVersion = semver.inc(release.oldVersion, bumpArg) as string;
					console.log(`  [auto] ${release.displayName}: ${bumpArg} → ${release.newVersion}`);
					continue;
				}

				const bumpOptions = [
					{label: `patch → ${semver.inc(release.oldVersion, 'patch')}`, value: 'patch'},
					{label: `minor → ${semver.inc(release.oldVersion, 'minor')}`, value: 'minor'},
					{label: `major → ${semver.inc(release.oldVersion, 'major')}`, value: 'major'},
					{label: 'custom → enter manually', value: 'custom'},
				];

				const bump = await select({
					message: `${release.displayName}  (current: ${release.oldVersion}) — bump type?`,
					options: bumpOptions,
				});
				checkCancel(bump);

				if (bump === 'custom') {
					const customVersion = await text({
						message: `Enter new version for ${release.displayName}:`,
						validate(value) {
							if (!semver.valid(value)) {
								return 'Invalid semver version.';
							}
						},
					});
					checkCancel(customVersion);
					release.bump = customVersion as string;
					release.newVersion = customVersion as string;
				} else {
					release.bump = bump as semver.ReleaseType;
					release.newVersion = semver.inc(
						release.oldVersion,
						bump as semver.ReleaseType
					) as string;
				}
			}

			step = 4;
			continue;
		}

		if (step === 4) {
			/* Step 4 — Preview summary + action */

			const tag = resolveTag(today);
			commitMsg =
				'release ' +
				releases.map(r => `${r.displayName}@${r.newVersion}`).join(' ');

			const tableRows = releases.map(
				r => `  ${r.displayName.padEnd(22)} ${r.oldVersion} → ${r.newVersion}`
			);

			note(
				[
					'  package                    old      new',
					...tableRows,
					'',
					`  tag:     ${tag}`,
					`  commit:  ${commitMsg}`,
					`  branch:  ${currentBranch}  (releases always happen on the default branch)`,
				].join('\n'),
				isDry ? 'Release preview — DRY RUN' : 'Release preview'
			);

			if (isDry) {
				outro('Dry run complete — all checks passed. Nothing was written.');
				break;
			}

			let action: string;

			if (isYes) {
				console.log('  [auto] confirmed\n');
				action = 'confirm';
			} else {
				const selected = await select({
					message: 'Proceed?',
					options: [
						{label: 'proceed — continue to next steps', value: 'confirm'},
						{label: 'back — go back to bump selection', value: 'back'},
						{label: 'exit — abort with no disk changes', value: 'exit'},
					],
				});
				checkCancel(selected);
				action = selected as string;
			}

			if (action === 'exit') {
				abort('Aborted.');
			}

			if (action === 'back') {
				step = 3;
				continue;
			}

			/* confirm — exit the selection loop */

			confirmed = true;
			break;
		}
	}

	if (!confirmed) {
		return;
	}

	if (!skipToStaging) {
		/* Step 5 — Annotation check (versions now known) */

		if (isYes) {
			const missingSinceTags = findMissingSinceTags(releases);
			if (missingSinceTags.length > 0) {
				const maxFile = Math.max(...missingSinceTags.map(item => item.file.length));
				const lines = missingSinceTags
					.map(item => `  ${item.file.padEnd(maxFile + 2)}${item.symbol}  (@since ${item.sinceVersion})`)
					.join('\n');
				console.error(`\n⚠ Exports missing @since (${missingSinceTags.length} total):\n${lines}\n`);
				console.error('Fix the above @since tags and re-run.\n');
				process.exit(1);
			}
		} else {
			await checkSinceTags(isDry, checkCancel, releases);
		}

		/* Step 6 — Write changes to disk */

		if (!isYes) {
			const writeAnswer = await select({
				message: 'Write changelog, package.json and RELEASE.md to disk?',
				options: [
					{label: 'yes — write files', value: 'yes'},
					{label: 'skip — files already written, continue to next step', value: 'skip'},
					{label: 'no — abort with no disk changes', value: 'no'},
				],
			});
			checkCancel(writeAnswer);
			if (writeAnswer === 'no') { abort('Aborted.'); }
			if (writeAnswer === 'skip') {
				console.log('  skipped writing files\n');
			} else {
				writeReleaseFiles(releases, today);
			}
		} else {
			writeReleaseFiles(releases, today);
		}
	}

	/* Step 7 — Stage files */

	const releaseFiles = [
		...releases.map(r => `packages/${r.pkgName}/package.json`),
		...releases.map(r => `packages/${r.pkgName}/CHANGELOG.md`),
		'RELEASE.md',
	];

	if (isYes) {
		if (releaseFiles.length > 0) { stageFiles(releaseFiles); }
	} else {
		if (releaseFiles.length > 0) {
			console.log(`  staging:\n${releaseFiles.map(f => `    ${f}`).join('\n')}\n`);
			stageFiles(releaseFiles);
		}

		const continueAnswer = await text({
			message: 'Stage any additional files now (e.g. `git add …`), then press Enter to continue.',
			placeholder: '',
		});
		checkCancel(continueAnswer);
	}

	/* Step 8 — Commit, tag, push */

	if (!isYes) {
		const msgAnswer = await text({
			message: 'Commit message:',
			initialValue: commitMsg,
			validate: value => (value ?? '').trim().length === 0 ? 'Commit message cannot be empty.' : undefined,
		});
		checkCancel(msgAnswer);
		commitMsg = (msgAnswer as string).trim();
	}

	if (!isYes) {
		const gitAnswer = await select({
			message: 'Commit, tag and push?',
			options: [
				{label: 'yes — git commit + tag + push', value: 'yes'},
				{label: 'no — skip (files written, no git)', value: 'no'},
			],
		});
		checkCancel(gitAnswer);
		if (gitAnswer === 'no') {
			console.log('  skipped git commit/tag/push\n');
		} else {
			const resolvedTag = resolveTag(today);
			commitRelease(releases, commitMsg);
			tagRelease(resolvedTag, releases);
			pushRelease();
		}
	} else {
		const resolvedTag = resolveTag(today);
		commitRelease(releases, commitMsg);
		tagRelease(resolvedTag, releases);
		pushRelease();
	}

	/* Step 9 — Publish to npm */

	if (isYes) {
		console.log('  [auto] publishing to npm\n');
		checkNpmAuth();
		publishPackages(releases);
	} else {
		const publishAnswer = await select({
			message: 'Publish to npm now?',
			options: [
				{label: 'yes — publish all selected packages to npm', value: 'yes'},
				{label: 'no — skip (you can run pnpm publish manually later)', value: 'no'},
				{label: 'dry run — run pnpm publish --dry-run', value: 'dry'},
			],
		});
		checkCancel(publishAnswer);

		if (publishAnswer === 'yes') {
			checkNpmAuth();
			publishPackages(releases);
		} else if (publishAnswer === 'dry') {
			runPublishDryRun();
		} else {
			console.log('  skipped npm publish\n');
		}
	}

	/* Step 10 — Deploy site (optional) */

	if (isNoDeploy) {
		console.log('  [auto] skipping site deploy (--no-deploy)\n');
	} else {
		const deployAnswer = await select({
			message: 'Deploy the site now?',
			options: [
				{label: 'yes — build and deploy meta/site', value: 'yes'},
				{
					label: 'no — skip (you can run pnpm --filter @datakit/site run publish later)',
					value: 'no',
				},
			],
		});
		checkCancel(deployAnswer);

		if (deployAnswer === 'yes') {
			buildSite();
			deploySite();
		}
	}

	/* Step 9 — Done */

	outro(
		'Released!\n' +
		releases
			.map(r => `  ${r.displayName}@${r.newVersion}    → https://www.npmjs.com/package/${r.displayName}`)
			.join('\n')
	);
}

main().catch(err => {
	console.error('\nUnexpected error:', err);
	process.exit(1);
});
