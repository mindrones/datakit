import {expect, test} from '@playwright/test';

/*
 * Viewport strategy (mirrors what we should apply to 06_route_tx tests too):
 * - Sidebar is `hidden md:flex` → visible only at md+ (768px+)
 * - Mobile toolbar + drawer are `md:hidden` → visible only at xs/sm (<768px)
 * Sidebar tests pin to md; content tests work at every viewport.
 * The drawer is not tested here, same as 06_route_tx.
 */

const MD = {width: 768, height: 1024};

/* Sidebar tests — pinned to md */
test.describe('/types sidebar', () => {
	test.use({viewport: MD});

	test('renders group headers', async ({page}) => {
		await page.goto('/datakit/types/');
		const navHeaders = page.locator('[data-testid="group-nav"] code');
		await expect(navHeaders.filter({hasText: /^array$/})).toBeVisible();
		await expect(navHeaders.filter({hasText: /^function$/})).toBeVisible();
		await expect(navHeaders.filter({hasText: /^object$/})).toBeVisible();
		await expect(navHeaders.filter({hasText: /^shared$/})).toBeVisible();
	});

	test('shows known type names in nav', async ({page}) => {
		await page.goto('/datakit/types/');
		await expect(page.locator('[data-nav-type="Fn"]')).toBeVisible();
		await expect(page.locator('[data-nav-type="Obj"]')).toBeVisible();
	});
});

/* Content tests — use main-content DOM nodes, work at every viewport */

test('/types shows known type names in content', async ({page}) => {
	await page.goto('/datakit/types/');
	await expect(page.locator('h2 code').filter({hasText: /^Fn$/})).toBeVisible();
	await expect(page.locator('h2 code').filter({hasText: /^Obj$/})).toBeVisible();
});

test('/types search filters types by name', async ({page}) => {
	await page.goto('/datakit/types/');
	await page.getByRole('searchbox').fill('Fn');
	await expect(page.locator('#Obj')).not.toBeVisible();
	await expect(page.locator('#Fn')).toBeVisible();
});

test('/types each type has a code block', async ({page}) => {
	await page.goto('/datakit/types/');
	await expect(page.locator('pre').first()).toBeVisible();
});
