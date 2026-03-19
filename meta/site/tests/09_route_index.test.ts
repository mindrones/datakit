import {expect, test} from '@playwright/test';
import packages from '../src/lib/data/generated/packages.json' with {type: 'json'};

/* --- Package cards --- */

// @datakit/eslint is intentionally absent — config-only, no docs.
test('/ renders exactly two package cards (tx and types)', async ({page}) => {
	await page.goto('/datakit/');
	// exact: true avoids matching substrings in the machine-readable section
	await expect(page.getByText('@datakit/tx', {exact: true})).toBeVisible();
	await expect(page.getByText('@datakit/types', {exact: true})).toBeVisible();
	// No card link points to /eslint (the text mentions it in a note, not as a card)
	await expect(page.getByRole('link', {name: /@datakit\/eslint/i})).not.toBeVisible();
});

test('/ tx card links to /tx', async ({page}) => {
	await page.goto('/datakit/');
	const txLink = page.getByRole('link', {name: /@datakit\/tx/i});
	await expect(txLink).toHaveAttribute('href', /\/tx/);
});

test('/ types card links to /types', async ({page}) => {
	await page.goto('/datakit/');
	const typesLink = page.getByRole('link', {name: /@datakit\/types/i});
	await expect(typesLink).toHaveAttribute('href', /\/types/);
});

/* --- Machine-readable section --- */

test('/ shows llms.txt link', async ({page}) => {
	await page.goto('/datakit/');
	await expect(page.getByRole('link', {name: /llms\.txt/i}).first()).toBeVisible();
});

test('/ shows llms-full.txt link', async ({page}) => {
	await page.goto('/datakit/');
	await expect(page.getByRole('link', {name: /llms-full\.txt/i})).toBeVisible();
});

test('/ shows data/tx.json link', async ({page}) => {
	await page.goto('/datakit/');
	await expect(page.getByRole('link', {name: /data\/tx\.json/i})).toBeVisible();
});

test('/ shows data/types.json link', async ({page}) => {
	await page.goto('/datakit/');
	await expect(page.getByRole('link', {name: /data\/types\.json/i})).toBeVisible();
});

/* --- Header nav — no eslint link --- */

test('header nav does not contain an eslint link', async ({page}) => {
	await page.goto('/datakit/');
	await expect(page.locator('header').getByRole('link', {name: /eslint/i})).not.toBeVisible();
});

/* --- Dynamic packages data from packages.json --- */

for (const pkg of packages) {
	test(`/ card for ${pkg.name} shows version v${pkg.version} from packages.json`, async ({page}) => {
		await page.goto('/datakit/');
		const card = page.getByRole('link', {name: new RegExp(pkg.name.replace('/', '\\/'))});
		await expect(card.getByText(`v${pkg.version}`)).toBeVisible();
	});

	test(`/ card for ${pkg.name} shows description from packages.json`, async ({page}) => {
		await page.goto('/datakit/');
		const card = page.getByRole('link', {name: new RegExp(pkg.name.replace('/', '\\/'))});
		await expect(card.getByText(pkg.description)).toBeVisible();
	});
}
