import {expect, test} from '@playwright/test';

// --- Home page ---

test('/ renders package cards', async ({page}) => {
	await page.goto('/');
	await expect(page.getByText('@datakit/tx')).toBeVisible();
	await expect(page.getByText('@datakit/types')).toBeVisible();
	await expect(page.getByText('@datakit/eslint')).toBeVisible();
});

test('/ package cards link to correct routes', async ({page}) => {
	await page.goto('/');
	const txLink = page.getByRole('link', {name: /@datakit\/tx/i});
	await expect(txLink).toHaveAttribute('href', /\/tx/);
});

// --- /tx overview ---

test('/tx renders category nav in sidebar', async ({page}) => {
	await page.goto('/datakit/tx/');
	await expect(page.locator('[data-testid="category-nav"]').first()).toBeVisible();
});

test('/tx search filters sidebar and function list', async ({page}) => {
	await page.goto('/datakit/tx/');
	const search = page.getByRole('searchbox');
	await search.fill('capitalize');
	// 'capitalize' and 'decapitalize' are only in the string/string category
	const navSections = page.locator('[data-testid="category-nav"]');
	await expect(navSections).toHaveCount(1);
});

test('/tx shows all functions including capitalize', async ({page}) => {
	await page.goto('/datakit/tx/');
	await expect(page.locator('#capitalize')).toBeVisible();
});

test('/tx function anchor links work', async ({page}) => {
	await page.goto('/datakit/tx/#capitalize');
	await expect(page.locator('#capitalize')).toBeVisible();
});

// --- /tx/[category] detail ---

test('/tx/[category] shows function list', async ({page}) => {
	// category id: 'string/string' → route /tx/string/string
	await page.goto('/datakit/tx/string/string/');
	await expect(page.getByText('capitalize', {exact: true}).first()).toBeVisible();
	await expect(page.getByText('decapitalize', {exact: true}).first()).toBeVisible();
});

test('/tx/[category] breadcrumb links back to /tx', async ({page}) => {
	await page.goto('/datakit/tx/string/string/');
	// scope to main to avoid matching the header nav 'tx' link
	const breadcrumb = page.locator('main').getByRole('link', {name: /^tx$/i});
	await breadcrumb.click();
	await expect(page).toHaveURL(/\/tx\/?$/);
});

// --- sidebar highlighting and centering ---

test('/tx sidebar highlights functions visible in main view', async ({page}) => {
	await page.setViewportSize({width: 1440, height: 900});
	await page.goto('/datakit/tx/');

	// After page load, at least one sidebar nav link should have the accent border
	const highlightedLinks = page.locator('[data-nav-fn][style*="var(--color-accent)"]');
	await expect(highlightedLinks.first()).toBeVisible();
});

test('/tx sidebar follows page scroll — highlighted items stay centered', async ({page}) => {
	await page.setViewportSize({width: 1440, height: 900});
	await page.goto('/datakit/tx/');
	await page.waitForLoadState('networkidle');

	const sidebarNav = page.locator('aside nav');

	// Record sidebar scrollTop before scrolling
	const scrollTopBefore = await sidebarNav.evaluate((el: HTMLElement) => el.scrollTop);

	// Scroll the page well into the content
	await page.evaluate(() => window.scrollTo(0, 40000));

	// Wait for IntersectionObserver and $effect to update sidebar scroll
	await page.waitForFunction(
		([beforeScroll]) => {
			const nav = document.querySelector('aside nav') as HTMLElement | null;
			return nav !== null && nav.scrollTop > (beforeScroll as number) + 100;
		},
		[scrollTopBefore]
	);

	const scrollTopAfter = await sidebarNav.evaluate((el: HTMLElement) => el.scrollTop);

	// Sidebar must have scrolled to follow the page
	expect(scrollTopAfter).toBeGreaterThan(scrollTopBefore + 100);
});

// --- mobile drawer scroll ---

test.describe('mobile drawer', () => {
	test.use({viewport: {height: 844, width: 390}});

	test('/tx mobile drawer is scrollable from top', async ({page}) => {
		await page.goto('/datakit/tx/');
		await page.waitForLoadState('networkidle');

		// Open the drawer via direct JS click
		await page.evaluate(() => {
			const btn = document.querySelector('button[aria-label*="Open function"]') as HTMLButtonElement | null;
			btn?.click();
		});
		await page.waitForFunction(() => document.querySelector('[data-testid="drawer-nav"]') !== null);

		const drawerNav = page.getByTestId('drawer-nav');

		// Drawer should be scrollable: scrollHeight > clientHeight
		const {scrollHeight, clientHeight} = await drawerNav.evaluate((el: HTMLElement) => ({
			clientHeight: el.clientHeight,
			scrollHeight: el.scrollHeight,
		}));
		expect(scrollHeight).toBeGreaterThan(clientHeight);
	});

	test('/tx mobile drawer centers on visible functions when page scrolls', async ({page}) => {
		await page.goto('/datakit/tx/');
		await page.waitForLoadState('networkidle');

		// Scroll page deep before opening drawer
		await page.evaluate(() => window.scrollTo(0, 30000));
		await page.waitForTimeout(100);

		// Open the drawer via direct JS click
		await page.evaluate(() => {
			const btn = document.querySelector('button[aria-label*="Open function"]') as HTMLButtonElement | null;
			btn?.click();
		});
		await page.waitForTimeout(300); // wait for 250ms fly-in animation

		const drawerNav = page.getByTestId('drawer-nav');
		const scrollTop = await drawerNav.evaluate((el: HTMLElement) => el.scrollTop);

		// Drawer should have scrolled to show functions near the current page position
		expect(scrollTop).toBeGreaterThan(100);
	});
});
