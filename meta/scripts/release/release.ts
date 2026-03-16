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
import {commitRelease, pushRelease, resolveTag, tagRelease} from './git';
import {buildSite, deploySite, publishPackages} from './npm';
import {getPkgDisplayName, getPkgVersion, hasNextInChangelog, publishablePackages} from './packages';
import {checkBranch, checkCleanTree, checkNpmAuth} from './preflight';
import {runQualityGates} from './quality-gates';
import {todayString} from './utils';

import type {PkgName, PkgRelease} from './types';

const program = new Command()
	.name('pnpm release')
	.description('datakit release script')
	.option('--dry', 'simulate the full run (no writes, no git, no npm)')
	.option('--packages <list>', 'comma-separated packages to release: tx, types, eslint')
	.option('--bump <type>', 'bump type for all selected packages', (value) => {
		if (!['patch', 'minor'].includes(value)) {
			program.error('--bump must be "patch" or "minor". Major releases require interactive mode.');
		}
		return value as 'patch' | 'minor';
	})
	.option('--yes', 'auto-confirm at Step 4 (requires --packages and --bump)')
	.option('--no-deploy', 'skip the optional site deploy step (Step 8)')
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
		checkNpmAuth();
		checkCleanTree();
	}
	const currentBranch = checkBranch(isDry);

	/* Pre-run tag detection */

	const today = todayString();
	resolveTag(today); // exits if local-only conflict

	/* Quality gates */

	runQualityGates();

	/* Steps 1 — Annotation check */

	if (isYes) {
		const missingSinceTags = findMissingSinceTags();
		if (missingSinceTags.length > 0) {
			const maxFile = Math.max(...missingSinceTags.map(item => item.file.length));
			const lines = missingSinceTags
				.map(item => `  ${item.file.padEnd(maxFile + 2)}${item.symbol}`)
				.join('\n');
			console.error(`\n⚠ Exports missing @since (${missingSinceTags.length} total):\n${lines}\n`);
			console.error('Fix the above @since tags and re-run.\n');
			process.exit(1);
		}
	} else {
		await checkSinceTags(isDry, checkCancel);
	}

	/* Steps 2–4 — Select packages / bump / confirm loop */

	let releases: PkgRelease[] = [];
	let confirmed = false;
	let commitMsg = '';
	let step = 2;

	while (step <= 4) {
		if (step === 2) {
			/* Step 2 — Select packages */

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
				// auto-select all packages that have ## next
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

			step = 3;
			continue;
		}

		if (step === 3) {
			/* Step 3 — Bump type per package */

			let goBack = false;

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
					{label: '← back → return to package selection', value: 'back'},
				];

				const bump = await select({
					message: `${release.displayName}  (current: ${release.oldVersion}) — bump type?`,
					options: bumpOptions,
				});
				checkCancel(bump);

				if (bump === 'back') {
					goBack = true;
					break;
				}

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

			if (goBack) {
				step = 2;
				continue;
			}

			step = 4;
			continue;
		}

		if (step === 4) {
			/* Step 4 — Preview summary + action */

			const tag = resolveTag(today);
			commitMsg =
				'chore: release ' +
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
						{label: 'confirm — write files, commit, tag, push, publish', value: 'confirm'},
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

	/* Step 5 — Write changes to disk */

	writeReleaseFiles(releases, today);

	/* Step 6 — Commit, tag, push */

	const resolvedTag = resolveTag(today);
	commitRelease(releases, commitMsg);
	tagRelease(resolvedTag, releases);
	pushRelease();

	/* Step 7 — Publish to npm */

	publishPackages(releases);

	/* Step 8 — Deploy site (optional) */

	if (isNoDeploy) {
		console.log('  [auto] skipping site deploy (--no-deploy)\n');
	} else {
		const deployAnswer = await select({
			message: 'Deploy the site now?',
			options: [
				{label: 'yes — build and deploy meta/site', value: 'yes'},
				{
					label: 'no — skip (you can run pnpm --filter @datakit/site deploy later)',
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
