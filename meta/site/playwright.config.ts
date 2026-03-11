import {defineConfig} from '@playwright/test';

/*
 * Viewport widths aligned with Tailwind v4 breakpoints.
 * Each project sits at the lower bound of its breakpoint range so that
 * the correct Tailwind media-query tier is active during the test.
 *
 * xs  — below sm  (<640px)  → 375×812   (phone portrait)
 * sm  — ≥640px              → 640×900
 * md  — ≥768px              → 768×1024  (tablet portrait)
 * lg  — ≥1024px             → 1024×768  (tablet landscape / small laptop)
 * xl  — ≥1280px             → 1280×720  (HD)
 * 2xl — ≥1536px             → 1536×864
 */
const viewports = {
	xs:  {width: 375,  height: 812},
	sm:  {width: 640,  height: 900},
	md:  {width: 768,  height: 1024},
	lg:  {width: 1024, height: 768},
	xl:  {width: 1280, height: 720},
	'2xl': {width: 1536, height: 864},
};

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: 'html',
	use: {
		baseURL: 'http://localhost:5200',
		browserName: 'chromium',
		trace: 'on-first-retry',
	},
	projects: Object.entries(viewports).map(([name, viewport]) => ({
		name,
		use: {browserName: 'chromium', viewport},
	})),
	webServer: {
		command: 'pnpm dev --port 5200',
		reuseExistingServer: !process.env.CI,
		url: 'http://localhost:5200',
	},
});
