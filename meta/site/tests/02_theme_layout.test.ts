import {expect, test, type Page} from '@playwright/test';

test.describe('layout shell', () => {
	test('renders header and main', async ({page}) => {
		await page.goto('/');
		await expect(page.locator('header')).toBeVisible();
		await expect(page.locator('main')).toBeVisible();
	});

	test('footer contains copyright text', async ({page}) => {
		await page.goto('/');
		await expect(page.locator('footer')).toContainText('mindrones');
	});

	test('home page placeholder renders', async ({page}) => {
		await page.goto('/');
		await expect(page.locator('h1')).toContainText('@datakit');
	});
});

test.describe('header navigation', () => {
	test.describe('desktop', () => {
		test.use({viewport: {width: 1280, height: 720}});

		test('footer is visible', async ({page}) => {
			await page.goto('/');
			await expect(page.locator('footer')).toBeVisible();
		});

		test('@datakit logo links to home', async ({page}) => {
			await page.goto('/');
			// desktop logo is the second a[href="/datakit/"] in DOM (first is mobile, hidden)
			await expect(page.locator('header a[href="/datakit/"]').last()).toBeVisible();
		});

		test('shows package nav links without home link', async ({page}) => {
			await page.goto('/');
			const nav = page.locator('header nav');
			await expect(nav).toBeVisible();
			// eslint is config-only — intentionally absent from nav
			await expect(nav.locator('a[href="/datakit/eslint"]')).toHaveCount(0);
			await expect(nav.locator('a[href="/datakit/tx"]')).toBeVisible();
			await expect(nav.locator('a[href="/datakit/types"]')).toBeVisible();
			await expect(nav.locator('a[href="/datakit/"]')).toHaveCount(0);
		});

		test('hamburger is hidden', async ({page}) => {
			await page.goto('/');
			await expect(page.getByRole('button', {name: 'Open menu'})).toBeHidden();
		});

		test('active link shows / prefix', async ({page}) => {
			await page.goto('/datakit/tx/');
			const txLink = page.locator('header nav a[href="/datakit/tx"]');
			await expect(txLink).toContainText('/tx');
		});
	});

	test.describe('mobile', () => {
		test.use({viewport: {width: 375, height: 812}});

		test('@datakit logo links to home', async ({page}) => {
			await page.goto('/');
			await expect(page.locator('header a[href="/datakit/"]').first()).toBeVisible();
		});

		test('mobile logo shows current subpath', async ({page}) => {
			await page.goto('/datakit/types/');
			await expect(page.locator('header a[href="/datakit/"]').first()).toContainText('@datakit/types');
		});

		test('desktop nav is hidden, hamburger is visible', async ({page}) => {
			await page.goto('/');
			await expect(page.locator('header nav')).toBeHidden();
			await expect(page.getByRole('button', {name: 'Open menu'})).toBeVisible();
		});

		test('hamburger opens drawer with all nav links including home', async ({page}) => {
			await page.goto('/');
			await page.waitForLoadState('networkidle');
			await page.getByRole('button', {name: 'Open menu'}).click();
			const drawer = page.locator('nav[aria-label="Mobile navigation"]');
			await expect(drawer).toBeVisible();
			await expect(drawer.locator('a', {hasText: 'Home'})).toBeVisible();
			await expect(drawer.locator('a[href="/datakit/tx"]')).toBeVisible();
		});

		test('hamburger icon becomes X when drawer is open', async ({page}) => {
			await page.goto('/');
			await page.waitForLoadState('networkidle');
			await page.getByRole('button', {name: 'Open menu'}).click();
			await expect(page.getByRole('button', {name: 'Close menu'})).toBeVisible();
		});
	});
});

test.describe('theme toggle', () => {
	// Fix viewport so we always target the visible desktop toggle (nth=1)
	test.use({viewport: {width: 1280, height: 720}});

	const toggle = (page: Page) =>
		page.locator('button[aria-label="Toggle theme"]').nth(1);

	test('toggle button is present', async ({page}) => {
		await page.goto('/');
		await expect(toggle(page)).toBeVisible();
	});

	test('clicking toggle adds .dark class and persists on reload', async ({page}) => {
		await page.goto('/');
		await page.evaluate(() => localStorage.removeItem('theme'));
		await page.reload();
		await page.waitForLoadState('networkidle');

		await toggle(page).click();
		await expect(page.locator('html')).toHaveClass(/dark/);

		await page.reload();
		await expect(page.locator('html')).toHaveClass(/dark/);
	});

	test('FOUC prevention: dark mode applied before paint', async ({page}) => {
		await page.goto('/');
		await page.evaluate(() => localStorage.setItem('theme', 'dark'));
		await page.reload();
		await expect(page.locator('html')).toHaveClass(/dark/);
	});

	test('light mode restores on toggle and persists', async ({page}) => {
		await page.goto('/');
		await page.evaluate(() => localStorage.setItem('theme', 'dark'));
		await page.reload();
		await page.waitForLoadState('networkidle');

		await toggle(page).click();
		await expect(page.locator('html')).not.toHaveClass(/dark/);

		await page.reload();
		await expect(page.locator('html')).not.toHaveClass(/dark/);
	});
});

test.describe('system preference', () => {
	test.use({viewport: {width: 1280, height: 720}});

	test('dark system preference applies .dark on initial load', async ({page}) => {
		await page.goto('/');
		await page.evaluate(() => localStorage.removeItem('theme'));
		await page.emulateMedia({colorScheme: 'dark'});
		await page.reload();
		await expect(page.locator('html')).toHaveClass(/dark/);
	});

	test('light system preference does not apply .dark on initial load', async ({page}) => {
		await page.goto('/');
		await page.evaluate(() => localStorage.removeItem('theme'));
		await page.emulateMedia({colorScheme: 'light'});
		await page.reload();
		await expect(page.locator('html')).not.toHaveClass(/dark/);
	});

	test('switching system to dark updates theme when no manual override', async ({page}) => {
		await page.emulateMedia({colorScheme: 'light'});
		await page.goto('/');
		await page.evaluate(() => localStorage.removeItem('theme'));
		await page.waitForLoadState('networkidle');
		await expect(page.locator('html')).not.toHaveClass(/dark/);

		await page.emulateMedia({colorScheme: 'dark'});
		await expect(page.locator('html')).toHaveClass(/dark/);
	});

	test('switching system to light updates theme when no manual override', async ({page}) => {
		await page.emulateMedia({colorScheme: 'dark'});
		await page.goto('/');
		await page.evaluate(() => localStorage.removeItem('theme'));
		await page.waitForLoadState('networkidle');
		await expect(page.locator('html')).toHaveClass(/dark/);

		await page.emulateMedia({colorScheme: 'light'});
		await expect(page.locator('html')).not.toHaveClass(/dark/);
	});

	test('system preference change overrides manual toggle', async ({page}) => {
		await page.emulateMedia({colorScheme: 'light'});
		await page.goto('/');
		await page.waitForLoadState('networkidle');
		await page.evaluate(() => localStorage.setItem('theme', 'light'));

		await page.emulateMedia({colorScheme: 'dark'});
		await expect(page.locator('html')).toHaveClass(/dark/);
		await expect(page.evaluate(() => localStorage.getItem('theme'))).resolves.toBeNull();
	});
});
